<template>
    <button
        :label="label"
        :class="['button', `button-${color}`]"
        :style="[{'width': width}]"
    >{{ label }}</button>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: 'button'
            },
            color: {
                type: String,
                default: 'primary'
            },

            width: {
                type: String,
                default: "210px"
            },
        }

    }
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-weight: 700;
        font-size: 16px;
        border: none;
        height: 44px;
        transition: var(--transition);
        border: 1px solid var(--primary-color);
        padding: 0;

        &__primary {
            color: var(--primary-color);
            background: transparent;

            &:hover {
                background-color: var(--primary-color);
                color: var(--white-color)
            }
        }

        &__green {
            color: var(--white-color);
            background: var(--primary-color);

            &:hover {
                background: var(--hover-color);
                border: 1px solid var(--hover-color);
            }

            &:disabled {
                background: var(--text-color);
            }
        }

    }
</style>