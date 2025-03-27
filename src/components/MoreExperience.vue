<template lang="pug">
v-container
    SectionTitle(:title="$t('more.title')" :icon="mdiFolderStar")
    v-row
        v-col(cols="12" sm="4")
            ExperienceCard(
                :card-title="$t('more.talks')"
                :card-title-icon="mdiPresentationPlay"
                :elements="talks"
                :elements-icon="mdiPresentation"
            )
        v-col(cols="12" sm="4")
            ExperienceCard(
                :card-title="$t('more.articles')"
                :card-title-icon="mdiNewspaperVariantMultiple"
                :elements="articles"
                :elements-icon="mdiNewspaper"
            )
        v-col(cols="12" sm="4")
            ExperienceCard(
                :card-title="$t('more.courses')"
                :card-title-icon="mdiCertificate"
                :elements="courses"
                :elements-icon="mdiFileCertificate"
                )
</template>

<script lang="ts" setup>
import SectionTitle from "@/components/SectionTitle.vue";
import type { MoreExperienceElement } from "@/types/MoreExperienceElement";
import { mdiCertificate, mdiFileCertificate, mdiFolderStar, mdiNewspaper, mdiNewspaperVariantMultiple, mdiPresentation, mdiPresentationPlay } from "@mdi/js";
import { ref, onMounted, watch, } from "vue";
import { useI18n } from "vue-i18n";
import ExperienceCard from "./more-experience/ExperienceCard.vue";
const { tm, locale } = useI18n();

const courses = ref<MoreExperienceElement[]>([]);

const articles = ref<MoreExperienceElement[]>([]);

const talks = ref<MoreExperienceElement[]>([]);

onMounted(() => {
    onInit();
});

watch(locale, () => {
    onInit();
});

function onInit() {
    courses.value = tm("more.coursesList");
    articles.value = tm("more.articlesList");
    talks.value = tm("more.talksList");
}

</script>