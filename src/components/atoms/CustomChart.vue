<template>
<VueApexCharts type="pie" :options="props.labels" :series="props.series"></VueApexCharts>
</template>

<script setup>
import { defineProps } from 'vue'
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
    labels: {
        type: Array,
        requite: true
    },
    series: {
        type: Array,
        requite: true
    }
});
</script>
   