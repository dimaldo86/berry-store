<template>
    <form class="row g-3 needs-validation form" @submit.prevent="submitForm" novalidate>
        <div class="col-12">
            <Vinput
                label="Full name"
                placeholder="Your full name"
                type="text"
                name="name"
                v-model:value.trim="v$.form.name.$model"
                :error="v$.form.name.$errors"
                @blur="v$.form.name.$touch()"
            ></Vinput>
        </div>
        <div class="col-12">
            <Vinput
                label="Email"
                placeholder="Your email address"
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
            <button class="btn" @click.prevent="showPassword = !showPassword">
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
         <div class="col-12 position-relative">
            <Vinput
                label="Confirm Password"
                placeholder="Confirm  your Password"
                type="password"
                name="confirmPassword"
                v-model:value.trim="v$.form.confirmPassword.$model"
                :error="v$.form.confirmPassword.$errors"
                @blur="v$.form.confirmPassword.$touch()"
                v-if="!showConfrimPassword"
            ></Vinput>
            <Vinput
                label="Confirm Password"
                type="text"
                name="confirmPassword"
                placeholder="Visible your confirm password mode"
                v-model:value.trim="v$.form.confirmPassword.$model"
                :error="v$.form.confirmPassword.$errors"
                @blur="v$.form.confirmPassword.$touch()"
                v-else-if="showConfrimPassword"
            ></Vinput>
            <button class="btn" @click.prevent="showConfrimPassword = !showConfrimPassword">
                <span  v-if="!showConfrimPassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 20 20">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                </span>
                <span  v-else-if="showConfrimPassword">
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
                label="Sign up"
                class="button__green"
                width="100%"
                :disabled="v$.$invalid"
            ></Vbutton>
        </div>
        <div class="col-12">
            <div class="form__account">Already have an account?
                <router-link to="/signIn" class="form__link">Sign in</router-link>
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
import { required, email, helpers, minLength, alpha, maxLength, sameAs } from '@vuelidate/validators'


export default {
    name: 'TheHeaderTopFormSignUp',
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
                name:'',
                email: '',
                password:'',
                confirmPassword:'',
                isCheckboxActive: false,
            },
            feedback:'',
            showPassword:false,
            showConfrimPassword:false

        }
    },
    validations() {
        return {
            form: {
                    name: {
                    required:helpers.withMessage('The Full Name field is required', required),
                    minLength:helpers.withMessage('Enter at least 3 characters',minLength(3)) ,
                    maxLength:helpers.withMessage('Many characters have been entered, the maximum value is 30', maxLength(30)),
                    alpha:helpers.withMessage('Enter alphabetic characters', alpha),
                },
                email: {
                    required: helpers.withMessage('The Email field is required', required),
                    email: helpers.withMessage('Invalid email, an example of a correct one - test@mail.com', email),
                },
                password: {
                    required: helpers.withMessage('The Password field is required', required),
                    minLength: helpers.withMessage(`The minimum password length is 6 characters`, minLength(6)),
                    hasUppercase:helpers.withMessage('Must contain uppercase letters', hasUppercase),
                    hasLowercase:helpers.withMessage('Must contain lowercase letters', hasLowercase),
                    hasSpecialChars:helpers.withMessage('Must contain special characters ($%#)', hasSpecialChars),
                },
                confirmPassword: {
                    required: helpers.withMessage('The Confirm password field is required', required),
                    sameAsPassword: sameAs(this.form.password)
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

            const formData = {
                name:this.form.name,
                email: this.form.email,
                password: this.form.password,
                checkbox:this.form.isCheckboxActive
            }

            console.log(formData);
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