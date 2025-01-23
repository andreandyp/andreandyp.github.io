<template lang="pug">
v-card(elevation="2" border)
    v-card-title.d-flex.justify-center
        h4.text-h5.d-flex.align-center.ga-2
            v-icon(:icon="cardTitleIcon" color="primary")
            | {{ cardTitle }}
    v-card-text
        span.text-body-1(v-for="element in elements")
            p(v-if="element.url == null")
                v-icon.mr-2(:icon="elementsIcon" color="secondary")
                | {{ element.name }}
            a.d-block.my-2(v-else :href="element.url")
                v-icon.mr-2(:icon="elementsIcon" color="secondary")
                | {{ element.name }}
            
</template>

<script setup lang="ts">
import type { MoreExperienceElement } from '@/types/MoreExperienceElement';

interface ExperienceCardProps {
    cardTitle: string;
    cardTitleIcon: string;
    elements: MoreExperienceElement[];
    elementsIcon: string;
}
defineProps<ExperienceCardProps>();
</script>