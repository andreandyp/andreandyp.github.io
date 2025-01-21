<template lang="pug">
h1.d-flex.justify-center.align-center.ga-2.py-3
    v-icon(:icon="icon" color="primary")
    | {{ title }}
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    icon: string,
}>();
</script>