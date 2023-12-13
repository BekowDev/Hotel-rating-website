import { HotelAPI } from "@/api/hotelAPI";

export const hotelModule = {
    namespaced: true,
    state: () => ({
        id: "",
        hotel: {},
    }),
    getters: {
        hotel(state) {
            return state.hotel;
        },
    },
    mutations: {
        setId(state, id) {
            state.id = id;
        },
        setHotel(state, obj) {
            state.hotel = obj;
        },
    },
    actions: {
        async getHotel({ commit, state }) {
            try {
                const res = await HotelAPI.getHotel({ id: state.id });
                commit("setHotel", res.data);
            } catch (error) {
                console.error("POST request Error:", error);
            }
        },
    },
};
