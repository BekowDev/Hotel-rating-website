import { AuthConfigAPIInstance, DefaultAPIInstance } from "@/api";

export const AuthAPI = {
    signUp(value) {
        const url = "/signUp";
        return AuthConfigAPIInstance.post(url, value);
    },
    signIn(value) {
        const url = "/signIn";
        return AuthConfigAPIInstance.post(url, value);
    },
    deleteAccount() {
        const url = "/deleteUser";
        return DefaultAPIInstance.delete(url);
    },
};
