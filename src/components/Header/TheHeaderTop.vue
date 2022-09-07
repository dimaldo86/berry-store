<template>
    <div class="top">
        <div class="container top__container">
            <div class="row top__wrap">
                <div class="col-md-3">
                    <div class="top__block">Available 24/7 at <a href="tel:+7405550128" class="top__link"> +7(405)
                            555-0128</a>
                    </div>
                </div>
                <div class="col-md-5 ofset-md-4 d-flex justify-content-between align-items-center ">
                    <div class="top__track">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                            class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <a class="top__link">Track Order</a>
                    </div>
                    <TheHeaderTopSelect
                        :countries="countries"
                        @select="itemSelect"
                        :select="select"
                    ></TheHeaderTopSelect>
                    <TheHeaderTopLogin></TheHeaderTopLogin>
                </div>


            </div>
            <!--row-->
        </div>
    </div>


</template>

<script>
import TheHeaderTopSelect from '@/components/Header/TheHeaderTopSelect'
import TheHeaderTopLogin from '@/components/Header/TheHeaderTopLogin'

    export default {
        name: 'TheHeaderTop',
        components: {
            TheHeaderTopSelect,
            TheHeaderTopLogin
        },
        data() {
            return {
                countries: [
                    {
                        name: 'usa',
                        mark: '$',
                        path: '../../assets/img/headerTop/usa.png'
                    },
                    {
                        name: 'italia',
                        mark: '€',
                        path: '../../assets/img/headerTop/italia.png'
                    },
                    {
                        name: 'deutschland',
                        mark: '€',
                        path: '../../assets/img/headerTop/deutschland.png'
                    }
                ],
                select:'Choose a currency',
            }
        },
        methods: {
            itemSelect(country) {
                this.select = (country.name)[0].toUpperCase() + country.name.slice(1) + ' ' + country.mark
            },
        },
    }
</script>

<style lang="scss" scoped>
    .top {
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
        background-color: var(--top-color);
        font-size: 14px;
        color: var(--secondary-color);

        &__container {
            height: 100%;
            padding: 8px 0;
        }

        &__wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
        }

        &__block {
            display: flex;
            align-items: center;
        }

        &__link {
            font-weight: 900;
            text-decoration: none;
            margin-left: 3px;
            transition: var(--transition);
            cursor: pointer;

            &:hover {
                color: var(--primary-color);
            }
        }

        &__track {
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover {

                svg,
                a {
                    transition: var(--transition);
                    fill: var(--primary-color)
                }
            }


        }

        a,
        select {
            color: var(--secondary-color);
        }
    }
</style>