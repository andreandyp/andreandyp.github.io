<template lang="pug">
v-container
    SectionTitle(
        :title="$t('work.title')"
        :icon="mdiBriefcase"
    )
    v-sheet.pa-4(elevation="2" border)
        v-timeline(side="end" align="start")
            v-timeline-item(v-for="job in jobs" :key="job.title" dot-color="primary" :icon="job.icon" fill-dot)
                template(v-slot:opposite)
                    p.text-body-1.d-none.d-sm-flex {{ job.startDate }} - {{ job.endDate ?? $t('work.current') }}
                h4.text-h6 {{ job.title }}
                p.text-body-1.d-flex.d-sm-none {{ job.startDate }} - {{ job.endDate ?? $t('work.current') }}
                p.text-body-1.py-3 {{ job.description }}
                v-expansion-panels(v-if="job.achievements.length > 0" variant="default" :expand-icon="mdiMenuDown" :collapse-icon="mdiMenuUp")
                    v-expansion-panel.border-sm(elevation="4")
                        v-expansion-panel-title
                            v-icon(:icon="mdiMedal" color="secondary")
                            p.text-overline.px-2 {{ $t('work.accomplishments') }}
                        v-expansion-panel-text
                            ul
                                li(v-for="achievement in job.achievements" :key="achievement")
                                    p.text-body-2.text-sm-body-1 {{ achievement }}
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { mdiBriefcase, mdiMedal, mdiMenuDown, mdiMenuUp, } from "@mdi/js";
import SectionTitle from "@/components/SectionTitle.vue";
import type { Job } from "@/types/Job";
import { resolveIcon } from "@/utils/ResolveIcons.ts";

const { tm, locale } = useI18n();
const jobs = ref<Job[]>([]);

watch(locale, async () => {
    await onInit();
});

onMounted(async () => {
    await onInit();
});

async function onInit() {
    const mapIcons = (tm("work.jobs") as Job[]).map(async (element) => {
        element.icon = await resolveIcon(element.icon);
        return element;
    });

    jobs.value = await Promise.all(mapIcons);
}
</script>