<template>
    <section class="h-full">
        <div class="container">
            <div class="h-full flex flex-col gap-5 sm:items-center pb-4">
                <ItemSearch />
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    <Item-Hotel v-for="hotel in allHotels"
                                :hotel="hotel" />
                </div>
                <PageButtons v-if="$store.state.searchModule.hotels.length != 0"
                             class="mt-auto" />
                <NotFound v-else />
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from "vuex";
import ItemHotel from "@/components/Search/ItemHotel.vue";
import ItemSearch from "@/components/Search/ItemSearch.vue";
import PageButtons from "@/components/Search/PageButtons.vue";
export default {
    computed: {
        ...mapGetters("searchModule", ["allHotels"]),

    },
    data() {
        return {};
    },
    created() {
        this.$store.dispatch("searchModule/getHotels");
    },
    components: { ItemHotel, ItemSearch, PageButtons },
};
</script>
<style scoped>
.item::-webkit-scrollbar {
    display: none;
}

.item {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
