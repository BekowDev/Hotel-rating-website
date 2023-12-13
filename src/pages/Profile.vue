<template>
    <section>
        <div class="container">
            <div class="flex justify-center">
                <div class="w-full flex flex-col gap-5 text-[18px] items-end">
                    <button class="w-fit h-9 flex items-center justify-between gap-2"
                            @click="signOut">
                        <div class="flex gap-2">
                            Sign out
                            <div class="w-[25px] h-[25px]">
                                <img src="@/assets/icons/sign-dark.png"
                                     alt="account-icon"
                                     class="icon" />
                            </div>
                        </div>
                    </button>
                    <button class="w-fit text-red-500"
                            @click="deleteAccount">
                        Delete account
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        signOut() {
            localStorage.clear()
            location.reload();
        },
        deleteAccount() {
            const result = confirm("Delete your account?");

            if (result)
                this.$store.dispatch('authModule/deleteAccount')
        }
    }
};
</script>
<style scoped></style>
