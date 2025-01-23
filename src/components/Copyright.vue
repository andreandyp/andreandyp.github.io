<template lang="pug">
v-footer(border)
    v-container
        v-row.text-center(justify="center")
            p.text-body-1 {{ $t('copyright.text') }}
        v-row.text-center(justify="center")
            p.text-body-1 {{ $t('copyright.tools') }}
        v-row.text-center(justify="center")
            p.text-body-1 {{ $t('copyright.version', [version]) }} - 
                a(href="https://github.com/AndreAndyP/andreandyp.github.io") {{ $t('copyright.repo') }}
</template>

<script setup lang="ts">
import { version } from "../../package.json";
</script>
