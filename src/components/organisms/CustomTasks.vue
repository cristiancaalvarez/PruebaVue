<template>
  <div>
    <h2>Lista de tareas del proyecto {{ taksList.name }}</h2>
    <hr>
    <div v-if="taksList.tasks.length > 0">
      <ul class="task-list">
        <li v-for="item in taksList.tasks" :key="item._id" class="task-item">
          <span>Proyecto:{{ item.name }}</span> - <span>{{ item.description }}</span> - <span>Estado: {{ item.status.label }}</span>
          <CustomButton class="button-list" label="Editar" @clicked="editTask(item)" />
          <CustomButton class="button-list button-error" @clicked="deleteTasks(item._id)" aria-label="Eliminar tarea" label="Eliminar" />
        </li>
      </ul>
      <div class="content-chart">
        <CustomChart :labels="chartOptions" :series="series"/>
      </div>
    </div>
    <div v-else>
      <span>No cuenta con tareas asignadas</span>
    </div>
  </div>
</template>
<script setup>
import { computed, defineEmits } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import CustomButton from '../atoms/CustomButton.vue';
import CustomChart from '../atoms/CustomChart.vue';

const store = useStore();
const route = useRoute();

const idProject = route.params.id;
const taksList = computed(() => {
  let projects = store.getters['projects/tasksList'](idProject);
  return projects;
});

const deleteTasks = (idTask) => {
  store.dispatch('projects/deleteTask', {idProject, idTask});
}

const emit = defineEmits(['clickedEdit']);

const editTask = (product) => {
  emit('clickedEdit', product);
}

const statusCounts = computed(() => {
    const counts = { '0': 0, '1': 0, '2': 0 };
    taksList.value.tasks.forEach(item => {
        counts[item.status._id]++;
    });
    return counts;
});

const series = computed(() => Object.values(statusCounts.value))
const chartOptions = {
    labels: ['Pendiente', 'En progreso', 'Completada']
};
</script>

<style scoped>
.task-list {
 list-style-type: none;
 padding: 0;
 margin: 0;
}

.task-item {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px;
 border-bottom: 1px solid #ddd;
}

.task-item:last-child {
 border-bottom: none;
}

.task-item span {
 margin-right: 10px;
}

/* chart*/
.content-chart {
  width: 50%;
  margin: auto;
  margin-top: 50px;
}

@media (max-width: 1024px) {
  .content-chart {
    width: 80%;
  }
}
@media (max-width: 425px) {
  .content-chart {
    width: 100%;
  }
}

</style>