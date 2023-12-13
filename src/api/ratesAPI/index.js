import { DefaultAPIInstance } from "@/api";

export const RatesAPI = {
    getRates(data) {
        const url = "/getRates";
        return DefaultAPIInstance.post(url, data);
    },
    addReview(data) {
        const url = "/createRate";
        return DefaultAPIInstance.post(url, data);
    },
    deleteReview(data) {
        const url = "/deleteRate";
        return DefaultAPIInstance.post(url, data);
    },
};
