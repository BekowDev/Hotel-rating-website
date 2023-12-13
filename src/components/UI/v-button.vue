<template>
    <button class="shadow-md">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "v-button",
};
</script>
<style scoped>
button {
    background-color: #5856d6;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    padding: 12px 24px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 600;
    white-space: nowrap;
}

button:hover {
    background-color: #4442a8;
}

button:active {
    background-color: #4442a83a;
}
</style>
