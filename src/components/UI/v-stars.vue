<template>
    <div class="text-orange-400 flex items-center gap-1">
        <a class="font-medium text-[12px]">
            {{ reviews }} reviews
        </a>
        <div class="text-lg -my-4">
            <span v-if="stars > 0">&#9733;</span>
            <span v-else>&#9734;</span>
            <span v-if="stars > 1">&#9733;</span>
            <span v-else>&#9734;</span>
            <span v-if="stars > 2">&#9733;</span>
            <span v-else>&#9734;</span>
            <span v-if="stars > 3">&#9733;</span>
            <span v-else>&#9734;</span>
            <span v-if="stars > 4">&#9733;</span>
            <span v-else>&#9734;</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-stars",
    props: {
        stars: {
            type: String,
            required: true,
        },
        reviews: {
            type: String,
            required: true,
        },
    },
};
</script>