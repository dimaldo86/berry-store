<template>
    <div class="login">
        <!-- Button trigger modal -->
        <button
                type="button"
                class="btn btn-primary login__btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="$router.push('/signUp')"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill"
                viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <p class="login__link">
                <span class="login__text login__text-divider">Sign in</span>
                <span>up</span>
            </p>
        </button>

        <!-- <TheSignIn></TheSignIn> -->

        <!-- Modal -->
        <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content modal__content">
                    <div class="modal__wrap">
                        <div class="modal-header modal__header p-0">
                            <h5 class="modal-title modal__title" id="exampleModalLabel">Sign in</h5>
                            <p class="modal__subtitle">
                                Sign in to your account using email and password provided during registration.
                            </p>
                            <button type="button" class="btn-close modal__close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body modal__body">
                            <TheHeaderTopFormSignIn></TheHeaderTopFormSignIn>

                            <router-view></router-view>
                        </div>
                    </div>
                    <div class="modal__line"></div>
                    <div class="modal-footer p-0  modal__footer justify-content-center">
                        <TheHeaderTopLoginSocial></TheHeaderTopLoginSocial>
                    </div>
                </div>

            </div>
        </div> -->
        <!--modal-->

    </div> <!--login-->

</template>

<script>
import TheHeaderTopFormSignIn from '@/components/Header/HeaderTop/TheHeaderTopFormSignIn'
import TheHeaderTopLoginSocial from '@/components/Header/HeaderTop/TheHeaderTopLoginSocial'
import TheSignIn from '@/views/TheSignIn'

export default {
    components: {
        TheHeaderTopFormSignIn,
        TheHeaderTopLoginSocial,
        TheSignIn
    },
    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>

    .login {
        cursor: pointer;

        .btn:active:focus {
            box-shadow: none;
        }

        &__btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: transparent;
            font-size: 14px;
            border: none;
            padding: 0;

            &:hover,
            &:active,
            &:focus {
                box-shadow: none;
                background: none;
            }
        }

        &:hover {
            .login__link {
                color: var(--primary-color);
            }

            svg {
                fill: var(--primary-color);
                transition: var(--transition);
            }
        }

        &__link {
            color: var(--secondary-color);
            font-size: 16px;
            margin: 0 5px;
            transition: var(--transition);

        }

        &__text {
            margin: 0 5px;

            &-divider::after {
                content: '/';
                margin-left: 5px;
            }
        }

    }

     @media (max-width: 767px) {
        .login {
            display: none;
        }
     }
</style>