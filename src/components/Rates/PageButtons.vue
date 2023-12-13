<template>
    <div class="w-full">
        <div class="flex gap-6 items-center justify-center">
            <v-button :disabled="$store.state.ratesModule.getData.page == 1"
                      @click="
                          $store.commit('previousPage'), $store.dispatch('getRates')
                          ">
                <div class="w-[15px] h-[15px]">
                    <img src="@/assets/icons/back2.png"
                         alt="search-icon"
                         class="icon" />
                </div>
            </v-button>

            <div class="flex gap-6 text-xl">
                <button v-for="page in +$store.state.ratesModule.totalPage"
                        :style="$store.state.ratesModule.getData.page == page
                            ? 'text-decoration: underline; font-weight: 700'
                            : false
                            "
                        class="text-[#5856d6]">
                    {{ page }}
                </button>
            </div>
            <v-button :disabled="$store.state.ratesModule.getData.page >=
                $store.state.ratesModule.totalPage
                "
                      @click="$store.commit('nextPage'), $store.dispatch('getRates')">
                <div class="w-[15px] h-[15px]">
                    <img src="@/assets/icons/back2.png"
                         alt="search-icon"
                         class="icon rotate-180" />
                </div>
            </v-button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {},
};
</script>
<style scoped></style>
