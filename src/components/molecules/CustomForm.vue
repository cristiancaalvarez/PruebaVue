<template>
  <div class="conten-form">
    <form @submit.prevent="addProject" class="form">
      <div class="form-group">
        <CustomInput
          label="Nombre del proyecto *"
          v-model="newProject.name"
          type="text"
        />
        <div class="message-error" v-if="v$.name.$error"> {{ v$.name.required.$message }} </div>
        <CustomTexarea
          label="Descripcion del proyecto *"
          v-model="newProject.description"
        />
        <div class="message-error" v-if="v$.description.$error">{{ v$.description.required.$message }}</div>
        <CustomInput
          label="Estado del proyecto (Activo/ inactivo)"
          v-model="newProject.status"
          type="checkbox"
        />
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
import CustomButton from '../atoms/CustomButton.vue';

const store = useStore();

const props = defineProps({
    dataEdit: Object,
});

const newProject = ref({
  name: '',
  description: '',
  status: false
});

const rules = {
 name: { required: helpers.withMessage('El nombre es requerido', required) },
 description: { required: helpers.withMessage('La descripción es requerida', required) }
};

const v$ = useVuelidate(rules, newProject);

const validationForm = computed(() => {
  v$.value.$touch();
  return !v$.value.$invalid;
})

const addProject = () => { 
  if (validationForm.value) {
    const project = { ...newProject.value };
    submitProject(project);
    resetForm()
  }
};

const resetForm = () => {
  newProject.value = { name: '', description: '', status: false };
  v$.value.$reset();
}

const submitProject = (project) => {
  try {
    project.status = project.status ? {label: 'Activo', _id: '1'} : {label: 'Inactivo', _id: '2'}
    if (!project._id) return store.dispatch('projects/addProject', project);
    store.dispatch('projects/editProject', project);
  } catch (error) {
    console.error(error);
  }
};

watch(() => props.dataEdit, (propEdit) => {
  propEdit.status = propEdit.status._id === '1' ? true : false
  newProject.value = propEdit
});
</script>

<style scoped>
.form-group {
  margin-bottom: 10px ;
}
.message-error {
  color: red;
}
</style>