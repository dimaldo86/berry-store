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
            <Vinput
                label="Confirm Password"
                placeholder="Confirm  your Password"
                type="password"
                name="password"
                v-model:value.trim="v$.form.confirmPassword.$model"
                :error="v$.form.confirmPassword.$errors"
                @blur="v$.form.confirmPassword.$touch()"
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
            feedback:''
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
                    sameAsPassword: sameAs(this.form.password), // can be a reference to a field or computed property
                    // sameAsRef: sameAs(ref), // can be passed a ref to compare
                    // sameAsRawValue: sameAs('foo') // this will compare if `sameAsRawValue` equals to "foo"
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
    }
</style>