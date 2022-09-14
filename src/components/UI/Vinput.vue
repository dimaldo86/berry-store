<template>
    <label :for="name" class="form-label">{{ label }}</label>
    <div class="wrap">
        <input
            class="form-control wrap__input"
            :type="type"
            :name="name"
            :id="name + Date.now()"
            :placeholder="placeholder"
            :value="value"
            @input="updateValue"
            :class="classObj"
        >
        <transition-group name="error">
            <div
                class="wrap__error"
                v-for="element of error"
                :key="element.$uid"
            >
                <div class="wrap__message">{{element.$message}}</div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            required: true
        },
        error: {
            type: Array,
            required: false
        }
    },
    emits: ["update:value", "blur"],
    inheritAttrs: false,

    data() {
        return {

        }

    },
    methods: {
        updateValue(e) {
            this.$emit('update:value', e.target.value)
        }
    },
    computed: {
        classObj() {
            return {
                'wrap__input-error':this.error.length,
                'wrap__input-succes':this.error.length === 0,
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .form-label {
        font-size: 14px;
        color: var(--select-color);
    }

    .wrap {
        &__input {

            &-succes {
                &:focus {
                border-color: var(--primary-color);
                box-shadow: 0 0 0 0.25rem var(--primary-color-4);
            }
            }


            &::placeholder {
                color: var(--placeholder-color);
            }

            &-error {
                &:focus {
                    border-color: var(--cancel-color);
                    box-shadow: 0 0 0 0.25rem var(--cancel-color-4);
                }
            }
        }

        &__error {
            font-size: 14px;
            color: var(--cancel-color);
            margin-top: 8px;
        }

        &__message {
            transition: var(--transition);
        }
    }

    .error-enter-active {
        transition: all 0.3s ease-out;
    }

    .error-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .error-enter-from {
        transform: translateX(-50px);
        opacity: 0;
    }

    .error-leave-to {
        transform: translateX(150px);
        opacity: 0;
    }
</style>