<template>
    <div class="flex flex-col gap-2 rounded-[12px] shadows p-3">
        <div class="font-bold text-xl uppercase">
            Description
        </div>
        <p class="flex flex-col border-t-[1px] pt-2 text-sm text-justify">
            {{ description }}
        </p>
    </div>
</template>
<script>
export default {
    name: 'v-description',
    props: {
        description: {
            type: String,
            default: "No description"
        }
    }
}
</script>