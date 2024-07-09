<template>    
    <router-link class="button" :to="props.link">
        {{ text }}
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    link: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
});
</script>
<style scoped>
.button {
    background-color: #557783;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #909690;
}

</style>