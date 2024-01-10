<template>
    <header
            class="w-full py-2 whitespace-nowrap sticky top-0 z-20 border-b-[1px] border-[rgba(255, 255, 255, 0.2)] bg-white z-40 shadow-md">
        <div class="container">
            <div class="flex justify-between flex-col items-center gap-2 sm:flex-row">
                <router-link to="/"
                             class="font-black text-3xl text-[#d23350]">
                    QonaqÚı
                </router-link>
                <nav
                     class="w-full sm:w-fit flex justify-center gap-6 overflow-x-auto px-4 l sm:px-0 lg:justify-end font-medium">
                    <div class="flex items-center h-10 gap-1">
                        <div class="w-[20px] h-[20px]">
                            <img src="@/assets/icons/earth-dark.png"
                                 alt="account-icon"
                                 class="icon" />
                        </div>
                        <select :value="$store.state.searchModule.getData.city"
                                @change="
                                    $store.commit('searchModule/setCity', $event.target.value),
                                    $store.dispatch('searchModule/getHotels')
                                    ">
                            <option value="Almaty">Almaty</option>
                            <option value="Astana">Astana</option>
                        </select>
                    </div>
                    <router-link to="/"
                                 class="flex items-center gap-1 h-10">
                        <div class="w-[24px] h-[24px]">
                            <img src="@/assets/icons/search-dark.png"
                                 alt="account-icon"
                                 class="icon" />
                        </div>
                        Search
                    </router-link>
                    <router-link to="/Profile"
                                 v-if="$store.state.authModule.authorized"
                                 class="flex items-center gap-1 h-10">
                        <div class="w-[20px] h-[20px]">
                            <img src="@/assets/icons/account-dark.png"
                                 alt="account-icon"
                                 class="icon" />
                        </div>
                        Profile
                    </router-link>
                    <router-link to="/Login"
                                 v-else
                                 class="flex items-center gap-1 h-10">
                        <div class="w-[20px] h-[20px]">
                            <img src="@/assets/icons/account-dark.png"
                                 alt="account-icon"
                                 class="icon" />
                        </div>
                        Sign in
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>
<script></script>
