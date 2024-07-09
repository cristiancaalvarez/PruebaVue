<!-- ProjectsPage.vue -->
<template>
<TemplateProjectPage>
    <template #title>
        <h1>Proyectos</h1>
    </template>
    <template #form>
        <CustomForm :dataEdit="dataEdit" />
    </template>
    <template #filter>
        <h2>Lista de proyectos</h2>
        <hr>
        <div class="filters">
            <div>
                <CustomSelect class="w-100" :options="optionsSelect" v-model="filterStatus"/>
            </div>
            <div>
                <CustomInput v-model="searchName" type="search" placeholder="Buscar por nombre"/>
            </div>
        </div>
    </template>
    <template #list>
        <CustomList @clickedEdit="edit" :items="filteredProjects"/>
    </template>
</TemplateProjectPage>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import CustomForm from '../components/molecules/CustomForm.vue';
import CustomSelect from '../components/atoms/CustomSelect.vue';
import CustomInput from '../components/atoms/CustomInput.vue';
import CustomList from '../components/organisms/CustomList.vue';
import TemplateProjectPage from '../template/TemplateProjectPage.vue';

const store = useStore();

const filterStatus = ref({label: 'Todos', _id: '0'});
const searchName = ref('');
const optionsSelect = ref([
    {label: 'Todos', _id: '0'},
    {label: 'Activos', _id: '1'},
    {label: 'Inactivos', _id: '2'}
]);

const dataEdit = ref({})

const edit = (product) => {
    dataEdit.value = product;
}

const filteredProjects = computed(() => {
    let projects = store.getters['projects/projectsByStatus'](filterStatus.value);
    if (searchName.value) {
        projects = store.getters['projects/projectsByName'](searchName.value);
    }
    return projects;
});

</script>

<style scoped>

.filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
}

.filters > div {
 flex: 1 0 45%;
 margin: 5px;
}

</style>