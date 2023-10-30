<template>
    <section class="h-full">
        <div class="container">
            <div class="w-full flex flex-col gap-5 text-[18px]">
                <button class="h-9 px-3 flex items-center justify-between gap-2">
                    <div class="flex gap-2">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/theme-dark.png"
                                 alt="account-icon"
                                 class="-rotate-90">
                        </div>
                        Appearance
                    </div>
                    Light
                </button>
                <button class="h-9 px-3 flex items-center justify-between gap-2">
                    <div class="flex gap-2">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/lang-dark.png"
                                 alt="account-icon">
                        </div>
                        Language
                    </div>
                    English
                </button>
                <button class="h-9 px-3 flex items-center justify-between gap-2">
                    <div class="flex gap-2">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/earth-dark.png"
                                 alt="account-icon">
                        </div>
                        Location
                    </div>
                    <div>
                        Almaty
                    </div>
                </button>
                <button class="w-fit h-9 px-3 flex items-center justify-between gap-2">
                    <div class="flex gap-2">
                        <div class="w-[25px] h-[25px]">
                            <img src="@/assets/icons/sign-dark.png"
                                 alt="account-icon">
                        </div>
                        Sign out
                    </div>
                </button>
                <button class="h-9 px-3 text-red-500 absolute bottom-4 text-[16px]">
                    Delete your account
                </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style></style>