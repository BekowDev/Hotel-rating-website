<template>
    <div class="text-4xl mx-auto flex justify-center items-center w-full px-[20px]">
        <div v-for="i in 5"
             class="cursor-pointer select-none"
             @click="$store.commit('ratesModule/setStar', i)">
            {{ this.$store.state.ratesModule.postData.stars >= i ? "&#9733;" : " &#9734;" }}
        </div>
    </div>
</template>
<script>

export default {
}
</script>