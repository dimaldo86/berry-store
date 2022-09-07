<template>
    <form class="row g-3 needs-validation form" @submit.prevent="submitForm" novalidate>
        <div class="col-12">
            <Vinput
                label="Email"
                placeholder="Your working email"
                type="email"
                name="email"
                v-model:value.trim="v$.form.email.$model"
                :error="v$.form.email.$errors"
                @blur="v$.form.email.$touch()"
            ></Vinput>
        </div>
        <div class="col-12">
            <Vinput
                label="Password"
                placeholder="Your password"
                type="password"
                name="password"
                v-model:value.trim="v$.form.password.$model"
                :error="v$.form.password.$errors"
                @blur="v$.form.password.$touch()"
            ></Vinput>
        </div>
        <div class="col-12">
            <Vcheckbox
                name="isCheckboxActive"
                type="checkbox"
                v-model:checked="form.isCheckboxActive"
            ></Vcheckbox>
        </div>
        <div class="col-12">
            <Vbutton
                label="Sign in"
                class="button__green"
                width="100%"
                :disabled="v$.$invalid"
            ></Vbutton>
        </div>
        <div class="col-12">
            <div class="form__account">Don't have an account?
                <a href="#" class="form__link">Sign up</a>
            </div>
        </div>

        <div class="form__feedback"> {{ feedback }}</div>
    </form>
</template>

<script>
import Vbutton from '@/components/UI/Vbutton'
import Vinput from '@/components/UI/Vinput'
import Vcheckbox from '@/components/UI/Vcheckbox'

import useVuelidate from '@vuelidate/core'
import { required, email, helpers, minLength } from '@vuelidate/validators'


export default {
    name: 'TheHeaderTopForm',
    components: {
        Vbutton,
        Vinput,
        Vcheckbox
    },
      setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            form: {
                email: '',
                password:'',
                isCheckboxActive: false,
            },
            feedback:''
        }
    },
    validations() {
        return {
            form: {
                email: {
                    required: helpers.withMessage('The Email field is required', required),
                    email: helpers.withMessage('Invalid email, an example of a correct one - test@mail.com', email),
                },
                password: {
                    required: helpers.withMessage('The Password field is required', required),
                    minLength: helpers.withMessage('The minimum password length is 6 characters', minLength(6))
                }
            }
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate()

           if (!this.v$.$error) {
        // if ANY fail validation
                this.feedback = 'Форма успешна отправлена'
                console.log(this.form);
                this.v$.$reset()
            } else {
                this.feedback = 'Форма незарегистрирована'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .form {
        min-height: 200px;

        &__account {
            margin-top: 8px;
            color: var(--select-color);
            font-size: 16px;
        }

        &__link {
            text-decoration: none;
            color: var(--primary-color);
            transition: var(--transition);

            &:hover {
                color: var(--hover-color);
            }
        }

        &__feedback {
            font-size: 20px;
            color: var(--primary-color);
        }
    }
</style>