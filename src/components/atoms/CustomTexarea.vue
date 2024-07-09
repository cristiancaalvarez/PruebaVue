<!-- AtomTextarea.vue -->
<template>
   <label for="">{{ props.label }}</label>
   <textarea v-model="model" :placeholder="props.placeholder"></textarea>
</template>
  
<script setup>
import { defineProps, defineModel } from 'vue'

const model = defineModel()

const props = defineProps({
   placeholder: String,
   label: String
})
</script>
<style scoped>
textarea {
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   box-sizing: border-box;
   border: 2px solid #ccc;
   border-radius: 4px;
   font-size: 16px;
   transition: border-color 0.3s ease;
   resize: vertical; /* Permite solo el redimensionamiento vertical */
}

textarea:focus {
   border-color: #4CAF50;
   outline: none;
}

textarea:read-only {
   background-color: #f0f0f0;
   color: #666;
}

textarea:disabled {
   background-color: #ddd;
   color: #999;
   cursor: not-allowed;
}

</style>
  