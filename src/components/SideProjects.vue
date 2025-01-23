<template lang="pug">
v-container
    SectionTitle(:title="$t('projects.title')" :icon="mdiApplicationBrackets")
    v-sheet.pa-7(elevation="2" border)
        v-row
            v-tabs.w-100(v-model="projectName" align-tabs="center" color="primary" grow)
                v-tab(value="fuegograma") Fuegograma
                v-tab(value="axdecorx") AXDecor 2
                v-tab(value="dias") Dias
        v-row
            v-col(align="center")
                h4.text-h4 {{ projectTitle }}
                p.text-body-1.d-flex.d-sm-none {{ projectDescription }}
        v-row
            v-col(align="center" cols="12" sm="6")
                v-carousel(show-arrows="hover" progress="primary" v-model="currentImageIndex" hide-delimiters mandatory cycle)
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
                        v-btn.v-window__left(color="secondary" variant="elevated" @click="props.onClick" :icon="mdiChevronLeft" :aria-label="$t('projects.previousScreenshot')")
                    template(v-slot:next="{ props }")
                        v-btn.v-window__right(color="secondary" variant="elevated" @click="props.onClick" :icon="mdiChevronRight" :aria-label="$t('projects.previousScreenshot')")
            v-col(cols="12" sm="6")
                v-row
                    v-col(align="center" cols="12")
                        p.text-body-1.d-none.d-sm-flex {{ projectDescription }}
                    v-col(align="center" cols="12")
                        v-expansion-panels.border-sm(variant="accordion" elevation="4" v-model="projectPanels" multiple)
                            ExpansionPanel(
                                :title="$t('projects.technologies')"
                                :icon="mdiPuzzle"
                                :chips="stack"
                            )
                            ExpansionPanel(
                                :title="$t('projects.features')"
                                :icon="mdiStar"
                                :chips="features"
                            )
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useDisplay } from "vuetify";
import { mdiApplicationBrackets, mdiChevronLeft, mdiChevronRight, mdiPuzzle, mdiStar } from "@mdi/js";
import SectionTitle from "@/components/SectionTitle.vue";
import type { Features } from "@/types/Features";
import type { Stack } from "@/types/Stack";
import { resolveIcon } from "@/utils/ResolveIcons";
import ExpansionPanel from "./side-projects/ExpansionPanel.vue";

const { t, tm } = useI18n();
const { mobile } = useDisplay();

const projectTitle = ref("");
const projectDescription = ref("");
const projectName = ref("fuegograma");
const stack = ref<Stack[]>([]);
const features = ref<Features[]>([]);
const projectPanels = ref<number[]>();
const imageDescriptions = ref([]);
const currentImageIndex = ref(0);

onMounted(async () => {
    await updateCurrentProject();
    if (!mobile.value) {
        projectPanels.value = [0, 1];
    }
});

watch(projectName, async () => {
    await updateCurrentProject();
});

async function updateCurrentProject() {
    projectTitle.value = t(`projects.${projectName.value}.title`);
    projectDescription.value = t(`projects.${projectName.value}.description`);
    imageDescriptions.value = tm(`projects.${projectName.value}.images`);
    updateStack(projectName.value);
    updateFeatures(projectName.value);
}

async function updateStack(projectName: string) {
    const resolvedIcons = (tm(`projects.${projectName}.technologies.stack`) as Stack[]).map(async elem => {
        elem.icon = await resolveIcon(elem.icon);
        return elem;
    });
    stack.value = await Promise.all(resolvedIcons);
}

async function updateFeatures(projectName: string) {
    const resolvedIcons = (tm(`projects.${projectName}.technologies.features`) as Features[]).map(async elem => {
        elem.icon = await resolveIcon(elem.icon);
        return elem;
    });
    features.value = await Promise.all(resolvedIcons);
}

function resolveImage(currentImageIndex: number): string {
    return new URL(
        `../assets/images/projects/${projectName.value}${currentImageIndex}.png`,
        import.meta.url
    ).href;
}
</script>
