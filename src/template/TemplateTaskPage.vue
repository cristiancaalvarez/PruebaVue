<!-- ProjectsTemplate.vue -->
<template>
<div class="container">
    <CustomLink link="/" text="< Regresar al inicio"/>
    <slot name="title"></slot>
    <slot name="form"></slot>
    <slot name="list"></slot>
    <slot name="chart"></slot>
</div>
</template>
<script setup>
import CustomLink from '../components/atoms/CustomLink.vue'
</script>
<style scoped>
.container {
    width: 80%;
    margin: auto;
}
</style>