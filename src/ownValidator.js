import { helpers } from '@vuelidate/validators'

const hasUppercase = val => /[A-Z]/.test(val)
const hasLowercase = val => /[a-z]/.test(val)
const hasSpecialChars = val => /[$%#]/.test(val)

export { hasUppercase, hasLowercase, hasSpecialChars }

// export const passwordValidator = helpers.regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)


