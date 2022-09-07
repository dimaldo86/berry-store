<template>

    <div class="dropdown">

        <button class="btn btn-secondary dropdown-toggle px-3 py-0" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
           {{ select }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="#D7DADD" class="bi bi-chevron-down"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>

        <ul class="dropdown-menu py-0">
            <li
                class="dropdown__list"
                v-for="country in countries"
                :key="country.path"
                 @click="selectList(country)"
            >
                <a class="dropdown-item d-flex align-items-center dropdown__link" href="#" >
                    <img class="dropdown__img" :src="require(`@/assets/img/headerTop/${country.name}.png`)" :alt="country.name">
                    <span class="dropdown__desc mx-2 text-center">
                        {{ country.name }} / {{ country.mark }}
                    </span>
                </a>
            </li>

        </ul>
    </div>

</template>

<script>
    export default {
        name: 'Vselect',
        props: {
            countries: {
                type: Array,
                default () {
                    return []
                }
            },
            select: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        methods: {
            selectList (country) {
                this.$emit('select', country)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .dropdown {

        display: flex;
        align-items: center;
        transition: var(--transition);
        height: 100%;

        &:hover {
            .dropdown-toggle {
                color: var(--primary-color);
            }

            svg {
                transition: var(--transition);
                fill: var(--primary-color)
            }
        }

        &-toggle {
            position: relative;
            display: flex;
            align-items: center;
            height: 100%;
            background: transparent;
            outline: none;
            border: none;
            box-shadow: none;
            color: var(--secondary-color);
        
            svg {
                position: absolute;
                right:-7px;
                top: 5px;
            }

            &:hover {
                background: none;
                box-shadow: none;
            }

            &::after {
                display: none;
            }

            &:focus,
            &:active {
                box-shadow: none;
                border: none;
                outline: none;
                background: transparent;
            }
        }

        .btn:active:focus,
        .btn.show:focus {
            box-shadow: none;
        }

       .btn.show, .btn.show:active {
            background: none;
            border: none;
        }

        &__link {
            transition: var(--transition);
            border-radius: 4px;

            &:hover {
                background-color: var(--primary-color);
            }
        }
        &__img {
            display: block;
            width: 20px;
            height: 20px;
        }

        &__desc {
            text-transform: capitalize;
            color: var(--select-color);
            transition: var(--transition);

            &:hover {
                color: var(--secondary-color);
            }
        }
    }
</style>