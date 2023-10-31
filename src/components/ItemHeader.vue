<template>
    <header
        class="w-full py-2 whitespace-nowrap sticky top-0 bg-white border-b-[1px] z-20"
    >
        <div class="container">
            <div class="flex flex-col items-center gap-4">
                <router-link to="/" class="font-black text-3xl">
                    Juldyz
                </router-link>
                <div class="relative flex w-full rounded-[8px] overflow-hidden">
                    <input
                        type="text"
                        placeholder="Hotel name..."
                        class="w-full py-2 pl-3 pr-16 bg-gray-200 rounded-[8px]"
                    />
                    <button
                        class="absolute right-0 bg-black h-full w-16 rounded-r-[8px] flex items-center justify-center outline-none"
                    >
                        <div class="w-[25px] h-[25px]">
                            <img
                                src="@/assets/icons/search-dark.png"
                                alt="search-icon"
                                class="invert-[100%]"
                            />
                        </div>
                    </button>
                </div>

                <nav
                    class="w-full flex text-[14px] overflow-x-scroll gap-2 justify-between"
                >
                    <router-link
                        to="/"
                        class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                        :class="$route.path == '/' ? 'active' : null"
                    >
                        <div class="w-[25px] h-[25px]">
                            <img
                                src="@/assets/icons/star-dark.png"
                                alt="star-icon"
                            />
                        </div>
                        Tips
                    </router-link>
                    <router-link
                        to="/Rates"
                        class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                        :class="$route.path == '/Rates' ? 'active' : null"
                    >
                        <div class="w-[25px] h-[25px]">
                            <img
                                src="@/assets/icons/heart-dark.png"
                                alt="heart-icon"
                            />
                        </div>
                        My rates
                    </router-link>
                    <router-link
                        to="/Profile"
                        class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                        :class="$route.path == '/Profile' ? 'active' : null"
                    >
                        <div class="w-[25px] h-[25px]">
                            <img
                                src="@/assets/icons/account-dark.png"
                                alt="account-icon"
                            />
                        </div>
                        Profile
                    </router-link>
                    <router-link
                        to="/Settings"
                        class="flex items-center gap-1 h-9 px-3 rounded-[8px] bg-gray-200"
                        :class="$route.path == '/Settings' ? 'active' : null"
                    >
                        <div class="w-[25px] h-[25px]">
                            <img
                                src="@/assets/icons/settings-dark.svg"
                                alt="settings-icon"
                            />
                        </div>
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    methods: {},
};
</script>
<style scoped>
nav::-webkit-scrollbar {
    display: none;
}

nav {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.active {
    background: white;
    color: black;
    filter: invert(100%);
}
</style>
