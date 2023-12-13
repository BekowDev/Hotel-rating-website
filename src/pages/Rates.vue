<template>
    <section class="">
        <div class="container">
            <div class="h-full flex flex-col gap-5 sm:items-center pb-4">
                <div class="sm:flex-row flex flex-col-reverse gap-2">
                    <ItemSearch />
                    <AddRate />
                </div>
                <div class="flex flex-col gap-3 w-full">
                    <TransitionGroup name="transition">
                        <ItemRate v-for="(rate, index) in allRates"
                                  :key="rate._id"
                                  :rate="rate" />
                    </TransitionGroup>
                </div>
                <PageButtons v-if="$store.state.ratesModule.rates.length != 0"
                             class="mt-auto" />
                <NotFound v-else />
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from "vuex";
import ItemRate from "@/components/Rates/ItemRate.vue";
import PageButtons from "@/components/Rates/PageButtons.vue";
import ItemSearch from "@/components/Rates/ItemSearch.vue";
import AddRate from "@/components/Rates/AddRate.vue";
export default {
    components: {
        ItemRate, PageButtons, ItemSearch, AddRate
    },
    computed: {
        ...mapGetters("ratesModule", ["allRates"]),
    },
    created() {
        this.$store.commit('ratesModule/setId', this.$route.params.id)
        this.$store.dispatch("ratesModule/getRates");
    },
};
</script>
<style scoped>
.transition {
    /* position: relative; */
    padding: 0;
}

.transition-move,
.transition-enter-active,
.transition-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.transition-enter-from {
    opacity: 0;
    transform: translate(-165px, 0);
}

.transition-leave-to {
    opacity: 0;
    transform: translate(-165px, 0);
}

.transition-leave-active {
    /* position: absolute; */
}
</style>
