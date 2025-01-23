<template lang="pug">
h3.text-h4.text-sm-h4.d-flex.justify-center.align-center.ga-2.py-3
    v-icon(:icon="icon" color="primary")
    | {{ title }}
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    icon: string,
}>();
</script>