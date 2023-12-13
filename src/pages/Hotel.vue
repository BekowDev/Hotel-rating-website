<template>
    <section>
        <div class="container relative">
            <div class="grid grid-flow-row gap-4">
                <div class="flex flex-col gap-2 w-full rounded-[12px] overflow-hidden shadows">
                    <div>
                        <v-swiper :images="hotel.images" />
                    </div>
                    <div class="p-3 text-sm">
                        <div>
                            <div class="font-black text-2xl whitespace-nowrap overflow-x-auto">
                                {{ hotel.name }}
                            </div>
                            <a @click="$router.push(`/Rates/${hotel._id}`)"
                               class="flex justify-between cursor-pointer">
                                <div>{{ hotel.type }}</div>
                                <v-stars :stars="hotel.stars"
                                         :reviews="hotel.reviews" />
                            </a>
                        </div>
                        <div class="flex justify-between gap-2 border-t-[1px] mt-2 pt-2">
                            <div class="overflow-x-scroll hide-scroll-bar">
                                <div>
                                    {{ hotel.workTime }}
                                </div>
                                <div class="whitespace-nowrap">
                                    {{ hotel.address }}
                                </div>
                            </div>
                            <div class="font-extrabold text-end whitespace-nowrap">
                                <div class="text-xs italic">
                                    From
                                </div>
                                <div class="text-xl">
                                    {{
                                        parseInt(hotel.price, 10).toLocaleString(
                                            "ru-RU"
                                        )
                                    }}₸
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <v-address :map="hotel.map" />
                <v-description :description="hotel.description" />
                <v-contacts :contacts="hotel.contacts" />
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("hotelModule", ["hotel"]),
    },
    created() {
        this.$store.commit("hotelModule/setId", this.$route.params.id);
        this.$store.dispatch("hotelModule/getHotel");
    },
};
</script>
