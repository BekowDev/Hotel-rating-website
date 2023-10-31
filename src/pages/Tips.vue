<template>
    <section>
        <div class="container">
            <div class="flex flex-col gap-4">
                <item-tip v-for="data in datas" />
            </div>
        </div>
    </section>
</template>
<script>
import ItemTip from "@/components/ItemTip.vue";
export default {
    components: {
        ItemTip,
    },
    data() {
        return {
            datas: [1, 2, 3, 4],
        };
    },
};
</script>
<style scoped></style>
