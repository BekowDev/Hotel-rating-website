<template>
    <div class="h-screen flex flex-col gap-3">
        <item-header />
        <router-view class="flex-1 overflow-y-auto" />
    </div>
</template>
<script>
import ItemHeader from "@/components/ItemHeader.vue";

export default {
    components: {
        ItemHeader,
    },
    data() {
        return {};
    },
};
</script>
<style scoped></style>
