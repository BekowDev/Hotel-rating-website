<template>
    <div class="flex flex-col gap-2"
         @click="toggleOverflow">
        <hr />
        <div class="flex justify-between">
            <div>
                <div class="flex justify-between text-2xl font-medium">
                    <div>
                        <span v-if="rate.username === $store.state.authModule.name"
                              class="font-bold italic ">You: {{ rate.username }}</span>
                        <span v-else>{{ rate.username }}</span>
                    </div>
                </div>
                <div class="text-[20px]">
                    <span> {{ rate.stars }}/5 </span>
                    <span v-if="rate.stars > 0">&#9733;</span>
                    <span v-else>&#9734;</span>
                    <span v-if="rate.stars > 1">&#9733;</span>
                    <span v-else>&#9734;</span>
                    <span v-if="rate.stars > 2">&#9733;</span>
                    <span v-else>&#9734;</span>
                    <span v-if="rate.stars > 3">&#9733;</span>
                    <span v-else>&#9734;</span>
                    <span v-if="rate.stars > 4">&#9733;</span>
                    <span v-else>&#9734;</span>
                </div>
                <div class="text-xs font-medium">
                    {{ new Date(rate.addedDate).getDate() }}.{{ new Date(rate.addedDate).getMonth() + 1 }}.{{ new
                        Date(rate.addedDate).getFullYear() }}
                </div>
            </div>
            <div class="w-[25px] h-[25px]"
                 v-show="rate.text.length > 150">
                <img src="@/assets/icons/back.png"
                     alt="account-icon"
                     class="icon transition-all"
                     :class="overflow ? 'rotate-180' : 'rotate-0'" />
            </div>
        </div>
        <div>
            {{ overflow ? rate.text.slice(0, 150) : rate.text }}
        </div>
        <hr />
    </div>
</template>
<script>

export default {
    props: {
        rate: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            overflow: true,
        };
    },
    methods: {
        toggleOverflow() {
            this.overflow = !this.overflow
        }
    }
}
</script>
<style scoped></style>