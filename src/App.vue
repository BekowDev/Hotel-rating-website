<template>
    <div class="">
        <item-header />
        <router-view class="pt-32"></router-view>
    </div>
</template>
<script>
import ItemHeader from '@/components/ItemHeader.vue';
import ItemSearch from '@/components/ItemSearch.vue';

export default {
    components: {
        ItemHeader, ItemSearch
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped></style>
