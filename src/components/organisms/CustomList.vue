<template>

<ul class="project-list">
  <li v-for="item in props.items" :key="item._id" class="project-item">
    <span>{{ item.name }}</span> - <span>{{ item.description }}</span> - <span>{{ item.status.label }}</span>
    <CustomButton class="button-list" label="Editar" @clicked="editProject(item)" />
    <CustomButton class="button-list button-error" @clicked="deleteProject(item._id)" label="Eliminar" />
    <router-link :to="`PageTasks/${item._id}`">Agregar tareas</router-link>
  </li>
</ul>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';
import CustomButton from '../atoms/CustomButton.vue';

const store = useStore();

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['clickedEdit']);

const editProject = (product) => {
  emit('clickedEdit', product);
}

const deleteProject = (_id) => {
  store.dispatch('projects/deleteProject', _id);
}
</script>

<style scoped>
.project-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.project-item:last-child {
  border-bottom: none;
}

.project-item span {
  margin-right: 10px;
}
</style>