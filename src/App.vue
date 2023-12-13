<template>
    <div class="h-screen flex flex-col relative">
        <item-header />
        <router-view class="py-4 flex-1" />
    </div>
</template>
<script>
import ItemHeader from "@/components/ItemHeader.vue";

export default {
    components: {
        ItemHeader,
    },
};
</script>
<style scoped></style>
