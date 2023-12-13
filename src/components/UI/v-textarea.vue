<template>
    <div class="flex flex-col gap-1 h-full w-full">
        <label class="pl-3 font-medium text-[18px]">
            <slot></slot>
        </label>
        <textarea :type="type"
                  :placeholder="placeholder"
                  class="rounded-[12px] bg-[var(--fields-color)] border-[1px] outline-none p-3 h-full"
                  :value="modelValue"
                  @input="updateInput" />
    </div>
</template>
<script>
export default {
    name: "v-textarea",

    props: {
        modelValue: [String, Number],
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
