// modules/projects.js
import { v4 as uuidv4 } from 'uuid';
export default {
    namespaced: true,
    state: {
        projects: []
    },
    mutations: {
        addProject(state, project) {
            project._id = uuidv4();
            project.tasks = []
            state.projects = [...state.projects, project]
        },
        editProject(state, project) {
            const index = state.projects.findIndex(item => item._id === project._id);
            if (index !== -1) state.projects[index] = project;
        },
        deleteProject(state, _id) {
            const index = state.projects.findIndex(item => item._id === _id);
            if (index !== -1) state.projects.splice(index, 1);
        },
        addTask(state, task) {
            task.newTask._id = uuidv4();
            const index = state.projects.findIndex(item => item._id === task.idProject);
            if (index !== -1) state.projects[index].tasks = [...state.projects[index].tasks, task.newTask]
        },
        editTask(state, task) {
            const indexProject = state.projects.findIndex(item => item._id === task.idProject);
            if (indexProject !== -1) {
                const indexTask = state.projects[indexProject].tasks.findIndex(item => item._id === task.newTask._id);
                state.projects[indexProject].tasks[indexTask] = task.newTask;
            }
        },
        deleteTask(state, projectTask) {
            const { idProject, idTask } = projectTask
            const indexProject = state.projects.findIndex(item => item._id === idProject);
            if (indexProject !== -1) {
                const indexTask = state.projects[indexProject].tasks.findIndex(item => item._id === idTask);
                state.projects[indexProject].tasks.splice(indexTask, 1);
            }
        },
    },
    actions: {
        addProject({ commit }, project) {
            commit('addProject', project);
        },
        editProject({ commit }, project) {
            commit('editProject', project);
        },
        deleteProject({ commit }, _id) {
            commit('deleteProject', _id);
        },
        addTask({ commit }, task) {
            commit('addTask', task);
        }, 
        editTask({ commit }, task) {
            commit('editTask', task);
        },   
        deleteTask({ commit }, projectTask) {
            commit('deleteTask', projectTask);
        },
    },
    getters: {
        projects: state => state.projects,
        tasksList: (state) => (idProject) => {
            const project = state.projects.find(item => item._id === idProject);
            return project
        },
        projectsById: (state) => (_id) => {
            return state.projects.filter(project => project._id === _id);
        },
        projectsByStatus: (state) => (status) => {
            if (status._id === '0') return state.projects
            return state.projects.filter(project => project.status._id == status._id);
        },
        projectsByName: (state) => (name) => {
            return state.projects.filter(project => project.name.toLowerCase().includes(name.toLowerCase()));
        },
    }
  };
  