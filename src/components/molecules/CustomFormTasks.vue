<template>
  <div>
    <form @submit.prevent="addTasks" class="form">
      <div class="form-group">
        <CustomInput
          label="Nombre de la tarea *"
          v-model="newTask.name"
          type="text"
        />
        <div class="message-error" v-if="v$.name.$error"> {{ v$.name.required.$message }} </div>
        <CustomTexarea
          label="Descripcion de la tarea *"
          v-model="newTask.description"
        />
        <div class="message-error" v-if="v$.name.$error"> {{ v$.description.required.$message }} </div>
  
        <CustomSelect class="w-100" :options="optionsSelect" v-model="newTask.status" />
      </div>
      <CustomButton class="button" label="Enviar" type="submit" />
    </form>
  </div>
</template>
<script setup>
import { computed, ref, watch, defineProps } from 'vue';
import { useStore } from 'vuex';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import CustomInput from '../atoms/CustomInput.vue';
import CustomTexarea from '../atoms/CustomTexarea.vue';
import CustomSelect from '../atoms/CustomSelect.vue';
import CustomButton from '../atoms/CustomButton.vue';
import { useRoute } from 'vue-router';

const store = useStore();

const route = useRoute();
const idProject = route.params.id;

const props = defineProps({
    dataEdit: Object,
});

const newTask = ref({
  name: '',
  description: '',
  status: {label: 'Pendiente', _id: '0'}
});

const optionsSelect = ref([
    {label: 'Pendiente', _id: '0'},
    {label: 'En progreso', _id: '1'},
    {label: 'Completado', _id: '2'}
]);

const rules = {
  name: { required: helpers.withMessage('El nombre es requerido', required) },
  description: { required: helpers.withMessage('La descripción es requerida', required) }
};

watch(() => props.dataEdit, (propEdit) => {
  newTask.value = propEdit
});

const v$ = useVuelidate(rules, newTask);

const validationForm = computed(() => {
  v$.value.$touch();
  return !v$.value.$invalid;
})

const addTasks = () => { 
  if (validationForm.value) {
    const project = { ...newTask.value };
    submitProject(project);
    resetForm()
  }
};

const resetForm = () => {
  newTask.value = { name: '', description: '', status: {label: 'Pendiente', _id: '0'} };
  v$.value.$reset();
}

const submitProject = (project) => {
  try {
    if (!project._id) return store.dispatch('projects/addTask', {idProject, newTask: project});
    store.dispatch('projects/editTask', {idProject, newTask: project});

  } catch (error) {
    console.error(error);
  }
};

</script>

<style scoped>
.form-group {
  margin-bottom: 10px ;
}

.message-error {
  color: red;
}
</style>