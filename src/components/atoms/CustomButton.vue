<template>
<button :class="props.class" @click="onClick" :type="props.type">{{ props.label }}</button>
</template>
   
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    label: String,
    type: {
        type: String,
        default: 'button',
    },
    class: String
});

const emit = defineEmits(['clicked']);

const onClick = () => {
    emit('clicked');
};
</script>

<style scoped>
.button {
    background-color: #008CBA;
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
    background-color: #4CAF50;
}

.button:active {
    background-color: #3e8e41;
}

.button:active,
.button-list:active {
    -webkit-box-shadow: 0.5px 0px 10px 0px rgb(131 131 131 / 75%);
    -moz-box-shadow: 0.5px 0px 10px 0px rgb(131 131 131 / 75%);
    box-shadow: 0.5px 0px 10px 0px rgb(131 131 131 / 75%);
    transform: translateY(.5px);
}

.button-list {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.button-error {
    background-color: #e72200;
}

</style>
   