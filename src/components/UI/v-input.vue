<template>
    <div class="flex flex-col gap-1">
        <label class="pl-3 font-medium text-[18px]">
            <slot></slot>
        </label>
        <div class="flex items-center w-full gap-3 relative">
            <div class="flex flex-1 rounded-[12px] bg-[var(--fields-color)] gap-2 py-3 pl-3 pr-8 border-[1px]">
                <input :type="type"
                       :placeholder="placeholder"
                       class="flex-1 bg-transparent outline-none"
                       :value="modelValue"
                       @input="updateInput" />
            </div>
            <div class="absolute right-0 mr-3"
                 v-show="modelValue"
                 @click="clearInput">
                <div class="w-4">
                    <img src="@/assets/icons/x-dark.png"
                         class="icon" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-input",

    props: {
        modelValue: [String],
        placeholder: String,
        type: String,
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
        clearInput() {
            this.$emit("update:modelValue", "");
        },
    },
};
</script>
<style scoped></style>
