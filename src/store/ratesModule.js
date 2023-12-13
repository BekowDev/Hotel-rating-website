import { RatesAPI } from "@/api/RatesAPI";

export const ratesModule = {
    namespaced: true,
    state: () => ({
        rates: [],
        totalPage: 1,
        reviewed: false,
        getData: {
            id: "",
            sortBy: "addedDate",
            sortOrder: "desc",
            page: 1,
            limit: 8,
            search: "",
        },
        postData: {
            stars: 0,
            text: "",
        },
    }),
    getters: {
        allRates(state) {
            return state.rates;
        },
    },
    mutations: {
        setStar(state, value) {
            state.postData.stars = state.postData.stars == value ? 0 : value;
        },
        setHotelId(state, value) {
            state.postData.hotel_id = value;
        },
        setText(state, value) {
            state.postData.text = value;
        },
        setReviewed(state, value) {
            state.reviewed = value;
        },

        setId(state, id) {
            state.getData.id = id;
        },
        setRates(state, value) {
            state.rates = value;
        },
        setSortBy(state, value) {
            state.getData.sortBy = value;
        },
        setSortOrder(state, value) {
            state.getData.sortOrder = value;
        },
        setTotalPage(state, value) {
            state.totalPage = Math.ceil(value / state.getData.limit).toString();
        },

        nextPage(state) {
            state.getData.page += 1;
        },
        previousPage(state) {
            state.getData.page -= 1;
        },
    },
    actions: {
        async getRates({ commit, state }) {
            try {
                const res = await RatesAPI.getRates(state.getData);
                commit("setRates", res.data.rates);
                commit("setTotalPage", res.data.totalPage);
                commit("setReviewed", res.data.reviewed);
            } catch (error) {
                console.error("POST request Error:", error);
            }
        },
        async addReview({ commit, state }) {
            try {
                await RatesAPI.addReview({
                    username: localStorage.getItem("name"),
                    text: state.postData.text,
                    hotel_id: state.getData.id,
                    stars: state.postData.stars,
                });
                commit("setReviewed", true);
            } catch (error) {
                console.error("POST request Error:", error);
            }
        },
        async deleteReview({ commit, state }) {
            try {
                await RatesAPI.deleteReview({
                    hotel_id: state.getData.id,
                });
                commit("setReviewed", false);
            } catch (error) {
                console.error("POST request Error:", error);
            }
        },
    },
};
