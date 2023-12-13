<template>
    <div class="flex flex-col relative">
        <v-button @click="toggleSort"
                  class="min-w-[200px] z-30">
            <div class="flex justify-center items-center gap-2">
                Sort
                <div class="w-[20px] h-[20px]">
                    <img src="@/assets/icons/sort-dark.png"
                         alt="search-icon"
                         class="icon invert" />
                </div>
            </div>
        </v-button>
        <div class="absolute w-full top-full z-30 px-3"
             v-show="sortActive">
            <div class="bg-white border-[1px] border-t-0 p-2 rounded-b-[12px] flex flex-col gap-2 border-[#5856d6]">
                <div class="flex flex-col text-[14px]">
                    <button class="px-[15px] py-[2px] flex-1"
                            @click="showNew"
                            style="transition: all 0.3s"
                            :style="$store.state.ratesModule.getData.sortBy ==
                                'addedDate' &&
                                $store.state.ratesModule.getData.sortOrder ==
                                'desc'
                                ? {
                                    background: '#5856d6',
                                    color: '#FFFFFF',
                                }
                                : false
                                ">
                        New Ones First
                    </button>
                    <button class="px-[15px] py-[2px] flex-1"
                            @click="showByPositive"
                            style="transition: all 0.3s"
                            :style="$store.state.ratesModule.getData.sortBy ==
                                'stars' &&
                                $store.state.ratesModule.getData.sortOrder ==
                                'desc'
                                ? {
                                    background: '#5856d6',
                                    color: '#FFFFFF',
                                }
                                : false
                                ">
                        Positive First
                    </button>
                    <button class="px-[15px] py-[2px] flex-1"
                            @click="showByNegative"
                            style="transition: all 0.3s"
                            :style="$store.state.ratesModule.getData.sortBy ==
                                'stars' &&
                                $store.state.ratesModule.getData.sortOrder ==
                                'asc'
                                ? {
                                    background: '#5856d6',
                                    color: '#FFFFFF',
                                }
                                : false
                                ">
                        Negative First
                    </button>
                </div>
            </div>
        </div>
        <div class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-20"
             v-show="sortActive"
             @click="toggleSort"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sortActive: false,
        };
    },
    methods: {
        toggleSort() {
            this.sortActive = !this.sortActive;
            document.body.style.overflow = this.sortActive
                ? "hidden"
                : "scroll";
        },
        showByPositive() {
            this.$store.commit("ratesModule/setSortOrder", "desc");
            this.$store.commit("ratesModule/setSortBy", "stars");
            this.$store.dispatch("ratesModule/getRates");
            this.sortActive = !this.sortActive;
            document.body.style.overflow = this.sortActive
                ? "hidden"
                : "scroll";
        },
        showByNegative() {
            this.$store.commit("ratesModule/setSortOrder", "asc");
            this.$store.commit("ratesModule/setSortBy", "stars");
            this.$store.dispatch("ratesModule/getRates");
            this.sortActive = !this.sortActive;
            document.body.style.overflow = this.sortActive
                ? "hidden"
                : "scroll";
        },
        showNew() {
            this.$store.commit("ratesModule/setSortOrder", "desc");
            this.$store.commit("ratesModule/setSortBy", "addedDate");
            this.$store.dispatch("ratesModule/getRates");
            this.sortActive = !this.sortActive;
            document.body.style.overflow = this.sortActive
                ? "hidden"
                : "scroll";
        },
    },
};
</script>
<style scoped>
button {
    padding: 8px 0;
    border-radius: 12px;
}
</style>
