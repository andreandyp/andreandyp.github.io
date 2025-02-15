<template lang="pug">
v-container
    SectionTitle(:title="$t('about.title')" :icon="mdiInformation")
    v-sheet.pa-7(elevation="2" border)
        v-row(align="center")
            v-col(cols="12" sm="6" align="center")
                v-img(src="@/assets/images/me.webp" :alt="$t('about.imageAlt')" aspect-ratio="1/1" width="250")
            v-col(cols="12" sm="6")
                v-row
                    v-col(align-self="start")
                        p.text-body-1 {{ $t("about.description1") }}
                v-row
                    v-col(align-self="end")
                        p.text-body-1 {{ $t("about.description2") }}
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
import { mdiInformation } from "@mdi/js";
</script>
