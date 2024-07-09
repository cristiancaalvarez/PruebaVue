<template>
<div :class="{inputCheck: props.type ===  'checkbox'}">
   <label for="">{{ props.label }}</label>
   <input :type="props.type" v-model="model" :placeholder="props.placeholder" />
</div>
</template>
 
<script setup>
import { defineModel, defineProps } from 'vue';

const model = defineModel()

const props = defineProps({
   type: String,
   placeholder: String,
   label: String
});

</script>
 
<style scoped>
   
input[type="text"] {
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   box-sizing: border-box;
   border: 2px solid #ccc;
   border-radius: 4px;
   font-size: 16px;
   transition: border-color 0.3s ease;
}

input[type="text"]:focus {
   border-color: #4CAF50;
   outline: none;
}

input[type="text"]:read-only {
 background-color: #f0f0f0;
 color: #666;
}

input[type="text"]:disabled {
 background-color: #ddd;
 color: #999;
}

/*checkbox*/
.inputCheck {
   display: flex;
}

.inputCheck label{
   order: 2;
   margin-left: 5px;
}

input[type="checkbox"] {
   order: 1;
   width: 20px;
}

input[type=checkbox]:checked {
   background-color: #008CBA;
}

/*seach*/
input[type="search"] {
 width: 100%;
 padding: 12px 20px;
 margin: 8px 0;
 box-sizing: border-box;
 border: 2px solid #ccc;
 border-radius: 4px;
 font-size: 16px;
 transition: border-color 0.3s ease;
}

input[type="search"]:focus {
 border-color: #4CAF50;
 outline: none;
}

input[type="search"]:focus {
 border-color: #4CAF50;
 box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
 transition: all 0.3s ease;
}
</style>