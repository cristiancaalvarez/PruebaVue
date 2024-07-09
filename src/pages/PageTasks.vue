<!-- ProjectsPage.vue -->
<template>

<TemplateTaskPage>
    <template #title>
        <h1>Tareas</h1>
    </template>
    <template #form>
        <CustomFormTasks :dataEdit="dataEdit"/>
    </template>
    <template #list>
        <CustomTasks @clickedEdit="edit"/>
    </template>
</TemplateTaskPage>
</template>

<script setup>
import { ref } from 'vue';
import CustomFormTasks from '../components/molecules/CustomFormTasks.vue';
import CustomTasks from '../components/organisms/CustomTasks.vue';
import TemplateTaskPage from '../template/TemplateTaskPage.vue';


const dataEdit = ref({})

const edit = (product) => {
    dataEdit.value = product;
}
</script>
