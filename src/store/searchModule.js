import { HotelAPI } from "../api/hotelAPI";
export const searchModule = {
    namespaced: true,
    state: () => ({
        hotels: [],
        totalPage: 1,
        getData: {
            sortBy: "price",
            sortOrder: "desc",
            page: 1,
            limit: 8,
            search: "",
            city: "Almaty",
        },
    }),
    getters: {
        allHotels(state) {
            return state.hotels;
        },
    },
    mutations: {
        setHotels(state, value) {
            state.hotels = value;
        },
        setSearch(state, value) {
            state.getData.search = value;
        },
        setCity(state, value) {
            state.getData.city = value;
        },
        clearSearch(state) {
            state.getData.search = "";
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
        async getHotels({ commit, state }) {
            try {
                setTimeout(async () => {
                    const res = await HotelAPI.getHotels(state.getData);
                    commit("setHotels", res.data.hotels);
                    commit("setTotalPage", res.data.totalPage);
                }, 500);
            } catch (error) {
                console.error("POST request Error:", error);
            }
        },
    },
};
