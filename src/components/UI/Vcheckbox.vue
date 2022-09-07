<template>
    <div class="form-check">
            <input
                class="form-check-input"
                :type="type"
                :name="name"
                :id="name"
                :value="value"
                :checked="checked"
                @change="updateChecked($event)"
            >
            <label class="form-check-label" for="invalidCheck">
                Keep me signed in
            </label>
            <a href="#" class="form-check-forgot">Forgot password?</a>
            <div class="invalid-feedback">
                You must agree before submitting.
            </div>
    </div>
</template>

<script >
export default {
    props:{
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
        checked: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        updateChecked(event) {
             this.$emit('update:checked', event.target.checked)
        }
    }
}
</script>
<style lang="scss" scoped>
    .form-check {
        display: flex;
        align-items: center;

        &-input {
            width: 20px;
            height: 20px;
            border-radius: 3px;

            &:checked {
                border-color:var(--primary-color);
                background-color:var(--primary-color);
            }

            &:focus {
                border-color: var(--primary-color);
                box-shadow: 0 0 0 0.25rem var(--primary-color-4);
            }
        }
        &-label {
            color: var(--select-color);
            font-size: 14px;
            margin-left: 15px;
        }

        &-forgot {
            margin-left: auto;
            margin-right: 0;
            color: var(--primary-color);
            font-size: 16px;
            text-decoration: none;
            transition: var(--transition);

            &:hover {
                color: var(--hover-color);
            }
        }
    }
</style>