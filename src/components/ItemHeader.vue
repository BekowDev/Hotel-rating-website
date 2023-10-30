<template>
    <header class="w-full py-2 whitespace-nowrap fixed bg-white border-b-[1px]">
        <div class="container overflow-hidden">
            <div class="flex flex-col items-center gap-5">
                <router-link to="/"
                             class="font-black text-3xl">
                    Juldyz
                </router-link>
                <nav class="w-full flex text-[14px] overflow-x-scroll gap-2">
                    <router-link to="/"
                                 class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                                 :class="$route.path == '/' ? 'active' : null">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/star-dark.png"
                                 alt="star-icon">
                        </div>
                        Tips
                    </router-link>
                    <div class="h-[20px] min-w-[1px] bg-gray-200 my-auto"></div>
                    <router-link to="/Search"
                                 class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                                 :class="$route.path == '/Search' ? 'active' : null">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/search-dark.png"
                                 alt="search-icon">
                        </div>
                        Search
                    </router-link>
                    <router-link to="/Rates"
                                 class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                                 :class="$route.path == '/Rates' ? 'active' : null">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/heart-dark.png"
                                 alt="heart-icon">
                        </div>
                        My rates
                    </router-link>
                    <router-link to="/Home"
                                 class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                                 :class="$route.path == '/Home' ? 'active' : null">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/account-dark.png"
                                 alt="account-icon">
                        </div>
                        Profile
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    methods: {

    }
}
</script>
<style scoped>
nav::-webkit-scrollbar {
    display: none;
}

nav {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

img {
    display: block;
    width: 100%;
    height: 100%;
}

.active {
    background: white;
    color: black;
    filter: invert(100%);
}
</style>