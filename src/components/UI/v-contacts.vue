<template>
    <div class="flex flex-col gap-2 rounded-[12px] shadows p-3">
        <h3 class="font-bold text-xl uppercase">
            Contacts
        </h3>
        <div class="flex flex-col gap-1 text-blue-600 border-t-[1px] pt-2">
            <a v-for="contact in contacts">
                {{ contact }}
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-contacts",
    props: {
        contacts: {
            type: Array,
            default: "No Contacts",
        },
    },
};
</script>
