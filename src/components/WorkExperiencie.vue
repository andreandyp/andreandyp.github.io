<template lang="pug">
v-container
    SectionTitle(
        :title="$t('work.title')"
        icon="mdi-briefcase"
    )
    v-sheet.pa-4(elevation="2" border)
        v-timeline(side="end" align="start")
            v-timeline-item(v-for="job in jobs" :key="job.title" dot-color="primary" :icon="job.icon" fill-dot)
                template(v-slot:opposite)
                    span.d-none.d-sm-flex {{ job.startDate }} - {{ job.endDate ?? $t('work.current') }}
                h3 {{ job.title }}
                p.d-flex.d-sm-none {{ job.startDate }} - {{ job.endDate ?? $t('work.current') }}
                p.py-3 {{ job.description }}
                v-expansion-panels(v-if="job.achievements.length > 0" variant="default" expand-icon="mdi-menu-down" collapse-icon="mdi-menu-up")
                    v-expansion-panel.border-sm(elevation="4")
                        v-expansion-panel-title
                            v-icon(icon="mdi-trophy-variant" color="secondary")
                            span.px-2 {{ $t('work.accomplishments') }}
                        v-expansion-panel-text
                            ul
                                li(v-for="achievement in job.achievements" :key="achievement") {{ achievement }}
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SectionTitle from "@/components/SectionTitle.vue";
import type { Job } from "@/types/Job";

const { tm } = useI18n();
const jobs = ref<Job[]>([]);

onMounted(() => {
    jobs.value = tm("work.jobs");
});
</script>