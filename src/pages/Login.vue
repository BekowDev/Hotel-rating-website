<template>
    <section>
        <div class="container h-[calc(100%-20%)]">
            <div class="h-full flex items-center justify-center">
                <form class="w-[350px] rounded-[12px] flex flex-col gap-4">
                    <h3 class="text-center font-extrabold text-2xl uppercase">
                        {{ account ? "Sign In" : "Sign Up" }}
                    </h3>
                    <v-input :placeholder="'Enter username'"
                             :type="'text'"
                             :modelValue="username"
                             @update:modelValue="updateUsername">Username</v-input>
                    <v-input :placeholder="'Enter password'"
                             :type="'password'"
                             :modelValue="password"
                             @update:modelValue="updatePassword">Password</v-input>
                    <v-button v-if="!account"
                              @click="signUp">Sign Up</v-button>
                    <v-button v-else
                              @click="signIn">Sign In</v-button>
                    <v-link @click="haveAccount">{{
                        account
                        ? "I don't have an account"
                        : "I already have an account"
                    }}</v-link>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        username() {
            return this.$store.state.authModule.username;
        },
        password() {
            return this.$store.state.authModule.password;
        },
    },
    data() {
        return {
            account: true,
        };
    },
    methods: {
        haveAccount() {
            this.account = !this.account;
        },
        updateUsername(value) {
            this.$store.commit('authModule/setUsername', value);
        },
        updatePassword(value) {
            this.$store.commit('authModule/setPassword', value);
        },
        signIn() {
            this.$store.dispatch('authModule/signIn')
        },
        signUp() {
            this.$store.dispatch('authModule/signUp')
        }
    },
};
</script>
<style scoped></style>
