<template lang="pug">
v-footer(border)
    v-container
        v-row.text-center(justify="center")
            p {{ $t('copyright.text') }}
        v-row.text-center(justify="center")
            p {{ $t('copyright.tools') }}
        v-row.text-center(justify="center")
            p {{ $t('copyright.version', [version]) }} - 
                a(href="https://github.com/AndreAndyP/andreandyp.github.io") {{ $t('copyright.repo') }}
</template>

<script setup lang="ts">
// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { version } from "../../package.json";
</script>
