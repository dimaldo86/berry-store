<template>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        </div>
                    </div> <!--modal__wrap-->
                    <div class="modal__line"></div>
                    <div class="modal-footer p-0  modal__footer justify-content-center">
                        <TheHeaderTopLoginSocial></TheHeaderTopLoginSocial>
                    </div>
                </div>

            </div>
        </div> <!--modal-->
</template>

<script>
import TheHeaderTopFormSignIn from '@/components/Header/HeaderTop/TheHeaderTopFormSignIn'
import TheHeaderTopLoginSocial from '@/components/Header/HeaderTop/TheHeaderTopLoginSocial'
export default {
     name:'TheSignIn',
    components: {
        TheHeaderTopFormSignIn,
        TheHeaderTopLoginSocial
    },

}
</script>

<style lang="scss">
.modal-footer>* {
        margin: 0;

}

.modal {
    --bs-modal-margin:10px;
    height: 100vh;

    .modal-footer {
        border-top:none
    }

    &__body {
        position: relative;
        padding: 0;

    }

    &__content {
        position: relative;
    }

    &__wrap {
        padding: 24px 48px;
        padding-bottom: 0;
    }

    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: none;
    }

    &__title {
        text-align: center;
        font-weight: 700;
        font-size: 28px;
        line-height: 1.5;
        color: var(--top-color);
        cursor: default;
    }

    &__subtitle {
        font-weight: 400;
        font-size: 16px;
        color: var(--text-color);
        margin-top: 12px;
        padding: 0 10px;
        text-align: center;
        }

    &__close {
        position: absolute;
        margin: 0px;
        top: 28px;
        right: 28px;
        width: 20px;
        height: 20px;
        transition: var(--transition);
        opacity: 1;
        border-radius: 50%;

        &:hover,
        &:focus {
            background-color: var(--hover-color);
        }

        &:focus {
            box-shadow: none;
        }

    }

    &__line {
        background-color: var(--text-color);
        width: 100%;
        height: 1px;
        margin-top: 24px;
        opacity: 0.5;
    }

    &__footer {
        margin: 16px 0 24px;
        cursor: default;
    }
}
</style>