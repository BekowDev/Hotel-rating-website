<template>
    <div>
        <div @click="toggleDialog"
             v-show="!dialog">
            <div class="w-full">
                <img :src="images[0]" />
            </div>
        </div>

        <div class="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)] z-20"
             v-show="dialog"
             @click="toggleDialog">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <img class="swiper-slide"
                         v-for="image in images"
                         :key="image"
                         :src="image" />
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default {
    name: "v-swiper",
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            swiper: null,
            dialog: false
        };
    },
    mounted() {
        this.initSwiper();
    },
    methods: {
        toggleDialog() { this.dialog = !this.dialog },
        initSwiper() {
            if (this.swiper)
                this.swiper.destroy();

            this.swiper = new Swiper(".swiper", {
                spaceBetween: 20,
                centeredSlides: true,
                slidesPerView: 1.2,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        },
    },
    watch: {
        images: {
            handler() {
                this.$nextTick(() => {
                    this.initSwiper();
                });
            },
            deep: true,
        },
    },
};
</script>
  
<style scoped>
.swiper {
    height: 100%;
    width: 100%;
}

.swiper-wrapper {
    display: flex;
    align-items: center;
}

img {
    object-fit: contain;
}
</style>