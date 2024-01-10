<template>
    <a @click="$router.push(`/hotel/${hotel._id}`)"
       class="w-full rounded-[12px] flex flex-col overflow-hidden border-[1px] shadow-md cursor-pointer">
        <div>
            <v-swiper :images="hotel.images" />
        </div>
        <div class="p-3">
            <div>
                <div class="font-bold text-xl">
                    {{ hotel.name }}
                </div>

                <div class="flex justify-between overflow-x-scroll hide-scroll-bar whitespace-nowrap">
                    <div>{{ hotel.type }}</div>
                    <v-stars :stars="hotel.stars"
                             :reviews="hotel.reviews" />
                </div>
            </div>
            <div class="flex gap-2 items-center justify-between border-t-[1px] mt-2 pt-2">
                <div class="overflow-x-scroll hide-scroll-bar">
                    <div>
                        {{ hotel.workTime }}
                    </div>
                    <div>
                        {{ hotel.address }}
                    </div>
                </div>
                <div class="font-extrabold text-end whitespace-nowrap">
                    <div class="text-xs italic">
                        From
                    </div>
                    <div class="text-xl">
                        {{
                            parseInt(hotel.price, 10).toLocaleString(
                                "ru-RU"
                            )
                        }}₸
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    props: {
        hotel: {
            type: Object,
            required: true,
        },
    },
};
</script>
