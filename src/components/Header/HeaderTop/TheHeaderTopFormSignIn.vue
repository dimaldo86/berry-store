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
        <div class="col-12 position-relative">
            <Vinput
                label="Password"
                placeholder="Your password"
                type="password"
                name="password"
                position="position"
                v-model:value.trim="v$.form.password.$model"
                :error="v$.form.password.$errors"
                @blur="v$.form.password.$touch()"
                v-if="!showPassword"
            ></Vinput>
            <Vinput
                label="Password"
                type="text"
                name="password"
                placeholder="Visible your password mode"
                v-model:value.trim="v$.form.password.$model"
                :error="v$.form.password.$errors"
                @blur="v$.form.password.$touch()"
                v-else-if="showPassword"
            ></Vinput>

            <button class="btn primary" @click.prevent="showPassword = !showPassword">
                <span  v-if="!showPassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 20 20">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                </span>
                <span  v-else-if="showPassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 20 20">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                    </svg>
                </span>
            </button>
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
                <router-link to="/signUp" class="form__link">Sign up</router-link>
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
import {hasUppercase, hasLowercase, hasSpecialChars} from '@/ownValidator'
import { required, email, helpers, minLength } from '@vuelidate/validators'


export default {
    name: 'TheHeaderTopFormSignIn',
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
            feedback:'',
            showPassword:false
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
                    minLength: helpers.withMessage('The minimum password length is 6 characters', minLength(6)),
                    hasUppercase:helpers.withMessage('Must contain uppercase letters', hasUppercase),
                    hasLowercase:helpers.withMessage('Must contain lowercase letters', hasLowercase),
                    hasSpecialChars:helpers.withMessage('Must contain special characters ($%#)', hasSpecialChars),
                }
            }
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate()

           if (!this.v$.$error) {

                const formData = {
                    email: this.form.email,
                    password: this.form.password,
                    checkbox:this.form.isCheckboxActive
                }

                console.log(formData);

                this.feedback = 'Форма успешна отправлена'

            } else {
                this.feedback = 'Форма незарегистрирована'
            }
             this.v$.$reset()
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
            cursor: default;
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
            font-size: 24px;
            color: var(--primary-color);
        }

        .btn {
            position: absolute;
            top:35px;
            right:5px;
            outline: none;
            border:none;
        }
    }
</style>