<template lang="pug">
v-container
    SectionTitle(:title="$t('projects.title')" icon="mdi-application-brackets")
    v-sheet.pa-7(elevation="2" border)
        v-row
            v-tabs.w-100(v-model="projectName" align-tabs="center" color="primary" grow)
                v-tab(value="fuegograma") Fuegograma
                v-tab(value="axdecorx") AXDecor 2
                v-tab(value="dias") Dias
        v-row
            v-col(align="center")
                h2 {{ projectTitle }}
                p.text-body-1.d-flex.d-sm-none {{ projectDescription }}
        v-row
            v-col(align="center" cols="12" sm="6")
                v-carousel(show-arrows="hover" progress="primary" v-model="currentImageIndex" hide-delimiters mandatory)
                    v-carousel-item(
                        v-for="(description, index) in imageDescriptions"
                        :key="index"
                        :alt="description"
                        :src="resolveImage(index)"
                        :value="index"
                        eager
                    )
                        v-container.fill-height
                            v-row.fill-height(justify="center" align="end")
                                v-chip(color="primary" variant="elevated") {{ description }}
                    template(v-slot:prev="{ props }")
                        v-btn.v-window__left(color="secondary" variant="elevated" @click="props.onClick" icon="mdi-chevron-left")
                    template(v-slot:next="{ props }")
                        v-btn.v-window__right(color="secondary" variant="elevated" @click="props.onClick" icon="mdi-chevron-right")
            v-col(cols="12" sm="6")
                v-row
                    v-col(align="center" cols="12")
                        p.text-body-1.d-none.d-sm-flex {{ projectDescription }}
                    v-col(align="center" cols="12")
                        v-expansion-panels.border-sm(variant="accordion" elevation="4" v-model="projectPanels" multiple)
                            v-expansion-panel
                                v-expansion-panel-title
                                    h3.d-flex.justify-center.align-center.ga-2
                                        v-icon(icon="mdi-puzzle" color="primary")
                                        | {{ $t('projects.technologies') }}
                                v-expansion-panel-text
                                    v-chip.ma-2(v-for="element in stack" :key="element.name" variant="elevated" color="secondary" :prepend-icon="element.icon") {{ element.name }}
                            v-expansion-panel
                                v-expansion-panel-title
                                    h3.d-flex.justify-center.align-center.ga-2
                                        v-icon(icon="mdi-star" color="primary")
                                        | {{ $t('projects.features') }}
                                v-expansion-panel-text
                                    v-chip.ma-2(v-for="feature in features" :key="feature.name" variant="elevated" color="secondary" :prepend-icon="feature.icon") {{ feature.name }}        
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";
// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SectionTitle from "@/components/SectionTitle.vue";
import type { Features } from "@/types/Features";
import type { Stack } from "@/types/Stack";

const { t, tm } = useI18n();
const { mobile } = useDisplay();

const projectTitle = ref("");
const projectDescription = ref("");
const projectName = ref("fuegograma");
const stack = ref<Stack[]>([]);
const features = ref<Features[]>([]);
const projectPanels = ref<number[]>();

const imageDescriptions = ref([]);

// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentImageIndex = ref(0);

onMounted(() => {
    updateCurrentProject();
    if (!mobile.value) {
        projectPanels.value = [0, 1];
    }
});

watch(projectName, () => {
    updateCurrentProject();
});

function updateCurrentProject() {
    projectTitle.value = t(`projects.${projectName.value}.title`);
    projectDescription.value = t(`projects.${projectName.value}.description`);
    imageDescriptions.value = tm(`projects.${projectName.value}.images`);
    updateStack(projectName.value);
    updateFeatures(projectName.value);
}

function updateStack(projectName: string) {
    stack.value = tm(`projects.${projectName}.technologies.stack`);
}

function updateFeatures(projectName: string) {
    features.value = tm(`projects.${projectName}.technologies.features`);
}

// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function resolveImage(currentImageIndex: number): string {
    return new URL(
        `../assets/images/projects/${projectName.value}${currentImageIndex}.png`,
        import.meta.url
    ).href;
}
</script>
