<template lang="pug">
v-container
    SectionTitle(:title="$t('about.title')" icon="mdi-information")
    v-sheet.pa-7(elevation="2" border)
        v-row(align="center")
            v-col(cols="12" sm="6" align="center")
                v-img(src="@/assets/images/me.jpg" :alt="$t('about.imageAlt')" aspect-ratio="1/1" width="250")
            v-col(cols="12" sm="6")
                v-row
                    v-col(align-self="start")
                        p {{ $t("about.description1") }}
                v-row
                    v-col(align-self="end")
                        p {{ $t("about.description2") }}
</template>

<script setup lang="ts">
// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SectionTitle from "@/components/SectionTitle.vue";
</script>
