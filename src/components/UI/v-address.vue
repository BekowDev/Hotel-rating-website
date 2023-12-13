<template>
    <div class="w-full h-full min-h-[200px] rounded-[12px] overflow-hidden shadows">
        <iframe :src="map"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"></iframe>
    </div>
</template>
<script>

export default {
    name: 'v-address',
    props: {
        map: {
            type: String,
            required: true
        }
    },
}
</script>
