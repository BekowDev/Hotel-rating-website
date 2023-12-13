<template>
    <div class="w-full flex flex-col gap-3 sm:flex-row-reverse md:w-[80%] lg:w-[60%]">
        <div class="flex w-full gap-3 relative items-center">
            <div class="flex flex-1 rounded-[12px] gap-2 py-3 pl-3 pr-8 bg-[var(--fields-color)] shadow-md">
                <div>
                    <div class="w-[30px] h-[30px]">
                        <img src="@/assets/icons/search-dark.png"
                             alt="search-icon"
                             class="icon" />
                    </div>
                </div>
                <input type="text"
                       class="flex-1 outline-none"
                       placeholder="Search..."
                       :value="$store.state.searchModule.getData.search"
                       @input="
                           $store.commit('searchModule/setSearch', $event.target.value),
                           $store.commit('searchModule/setPage', {
                               numbers: true,
                               value: '1',
                           }),
                           $store.dispatch('searchModule/getHotels')
                           " />
            </div>
            <div class="absolute right-0 mr-3"
                 v-show="$store.state.searchModule.getData.search"
                 @click="
                     $store.commit('searchModule/clearSearch'), $store.dispatch('searchModule/getHotels')
                     ">
                <div class="w-4">
                    <img src="@/assets/icons/x-dark.png"
                         class="icon" />
                </div>
            </div>
        </div>
        <div class="flex flex-col relative">
            <v-button @click="toggleSort"
                      class="min-w-[200px] z-30 h-full">
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
                        <button class="px-[15px] py-[2px]"
                                @click="showExpensive"
                                style="transition: all 0.3s"
                                :style="$store.state.searchModule.getData.sortOrder ==
                                    'desc' &&
                                    $store.state.searchModule.getData.sortBy ==
                                    'price'
                                    ? {
                                        background: '#5856d6',
                                        color: '#FFFFFF',
                                    }
                                    : false
                                    ">
                            Expensive First
                        </button>
                        <button class="px-[15px] py-[2px] flex-1"
                                @click="showBudget"
                                style="transition: all 0.3s"
                                :style="$store.state.searchModule.getData.sortOrder ==
                                    'asc' &&
                                    $store.state.searchModule.getData.sortBy ==
                                    'price'
                                    ? {
                                        background: '#5856d6',
                                        color: '#FFFFFF',
                                    }
                                    : false
                                    ">
                            Budget-Friendly First
                        </button>
                        <button class="px-[15px] py-[2px] flex-1"
                                @click="showByReviews"
                                style="transition: all 0.3s"
                                :style="$store.state.searchModule.getData.sortBy ==
                                    'stars' &&
                                    $store.state.searchModule.getData.sortOrder ==
                                    'desc'
                                    ? {
                                        background: '#5856d6',
                                        color: '#FFFFFF',
                                    }
                                    : false
                                    ">
                            By Customer Reviews
                        </button>
                        <button class="px-[15px] py-[2px] flex-1"
                                @click="showNew"
                                style="transition: all 0.3s"
                                :style="$store.state.searchModule.getData.sortBy ==
                                    'addedDate' &&
                                    $store.state.searchModule.getData.sortOrder ==
                                    'desc'
                                    ? {
                                        background: '#5856d6',
                                        color: '#FFFFFF',
                                    }
                                    : false
                                    ">
                            New Ones First
                        </button>
                    </div>
                </div>
            </div>
            <div class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-20"
                 v-show="sortActive"
                 @click="toggleSort"></div>
        </div>
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
        showExpensive() {
            this.$store.commit("searchModule/setSortOrder", "desc");
            this.$store.commit("searchModule/setSortBy", "price");
            this.$store.dispatch("searchModule/getHotels");
            this.sortActive = !this.sortActive;
            document.body.style.overflow = this.sortActive
                ? "hidden"
                : "scroll";
        },
        showBudget() {
            this.$store.commit("searchModule/setSortOrder", "asc");
            this.$store.commit("searchModule/setSortBy", "price");
            this.$store.dispatch("searchModule/getHotels");
            this.sortActive = !this.sortActive;
            document.body.style.overflow = this.sortActive
                ? "hidden"
                : "scroll";
        },
        showByReviews() {
            this.$store.commit("searchModule/setSortOrder", "desc");
            this.$store.commit("searchModule/setSortBy", "stars");
            this.$store.dispatch("searchModule/getHotels");
            this.sortActive = !this.sortActive;
            document.body.style.overflow = this.sortActive
                ? "hidden"
                : "scroll";
        },
        showNew() {
            this.$store.commit("searchModule/setSortOrder", "desc");
            this.$store.commit("searchModule/setSortBy", "addedDate");
            this.$store.dispatch("searchModule/getHotels");
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
