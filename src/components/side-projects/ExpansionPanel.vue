<template lang="pug">
v-expansion-panel
    v-expansion-panel-title(:collapse-icon="mdiChevronUp" :expand-icon="mdiChevronDown")
        p.text-button.d-flex.justify-center.align-center.ga-2
            v-icon(:icon="icon" color="primary")
            | {{ title }}
    v-expansion-panel-text
        v-chip.ma-2(v-for="element in chips" :key="element.name" variant="elevated" color="secondary" :prepend-icon="element.icon")
            p.text-body-2 {{ element.name }}
</template>

<script setup lang="ts">
import type { Features } from '@/types/Features';
import type { Stack } from '@/types/Stack';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

defineProps<{
    title: string;
    icon: string;
    chips: (Stack | Features)[];
}>();
</script>