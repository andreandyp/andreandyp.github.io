<template lang="pug">
v-container
    SectionTitle(:title="$t('more.title')" icon="mdi-folder-star")
    v-row
        v-col(cols="12" sm="4")
            v-card(elevation="2" border)
                v-card-title.d-flex.justify-center
                    h3.d-flex.align-center.ga-2
                        v-icon(icon="mdi-certificate" color="primary")
                        | {{ $t('more.courses') }}
                v-card-text
                    a.d-block(v-for="course in courses" :href="course.url")
                        v-icon.mr-2(icon="mdi-file-certificate" color="secondary")
                        | {{ course.name }}
        v-col(cols="12" sm="4")
            v-card(elevation="2" border)
                v-card-title.d-flex.justify-center
                    h3.d-flex.align-center.ga-2
                        v-icon(icon="mdi-newspaper-variant-multiple" color="primary")
                        | {{ $t('more.articles') }}
                v-card-text
                    a.d-block(v-for="articles in articles" :href="articles.url")
                        v-icon.mr-2(icon="mdi-newspaper" color="secondary")
                        | {{ articles.name }}
        v-col(cols="12" sm="4")
            v-card(elevation="2" border)
                v-card-title.d-flex.justify-center
                    h3.subtitle.d-flex.ga-2
                        v-icon(icon="mdi-presentation-play" color="primary")
                        | {{ $t('more.talks') }}
                v-card-text
                    a.d-block(v-for="talk in talks" :href="talk.url")
                        v-icon.mr-2(icon="mdi-presentation" color="secondary")
                        | {{ talk.name }}
</template>

<script lang="ts" setup>
// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SectionTitle from "@/components/SectionTitle.vue";
import { ref, onMounted, } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();

const courses = ref<{
    name: string;
    url: string | null;
}[]>([]);

const articles = ref<{
    name: string;
    url: string | null;
}[]>([]);

const talks = ref<{
    name: string;
    url: string | null;
}[]>([]);

onMounted(() => {
    courses.value = tm("more.coursesList");
    articles.value = tm("more.articlesList");
    talks.value = tm("more.talksList");
});

</script>