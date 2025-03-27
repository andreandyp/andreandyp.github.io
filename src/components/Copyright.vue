<template lang="pug">
v-footer(border)
    v-container
        v-row.text-center(justify="center")
            p.text-body-1 {{ $t('copyright.text') }}
        v-row.text-center(justify="center")
            p.text-body-1 {{ $t('copyright.tools') }}
        v-row.text-center(justify="center")
            p.text-body-1 {{ $t('copyright.version', [version]) }} - 
                a.text-yellow(v-show="showSupport" href="https://buymeacoffee.com/andreandyp") {{ $t('copyright.support') }} 
                span(v-show="showSupport")  - 
                a(href="https://github.com/AndreAndyP/andreandyp.github.io") {{ $t('copyright.repo') }}
</template>

<script setup lang="ts">
import { version } from "../../package.json";

import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const showSupport = computed(() => locale.value.includes("en"));
</script>
