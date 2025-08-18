<template lang="pug">
v-container
    v-card(elevation="2" border)
        v-card-title
            h1.text-wrap {{ $t("hero.title") }}
        v-card-subtitle
            h2.text-wrap {{ $t("hero.subtitle") }}
        v-card-text.d-flex.ga-2.align-center
            v-btn(:icon="mdiGithub" :aria-label="$t('hero.github')" href="https://github.com/AndreAndyP" target="_blank" color="primary")
            v-btn(:icon="mdiLinkedin" :aria-label="$t('hero.linkedin')" href="https://www.linkedin.com/in/andreandyp" target="_blank" color="primary")
            v-btn(:icon="mdiAt" :aria-label="$t('hero.email')" @click="click64Icon" target="_blank" color="primary")
            div(v-show="showSupport && !mobile")
                v-btn(:prepend-icon="mdiHandCoin" :aria-label="$t('hero.coffee')" variant="elevated" size="large" rounded="rounded" color="#FFD700" href="https://buymeacoffee.com/andreandyp" target="_blank") {{ $t('hero.coffee') }}
            div(v-show="!showSupport")
                v-btn(v-tooltip="$t('hero.coffee')" :icon="mdiHandCoin" :aria-label="$t('hero.coffee')" color="#FFD700" href="https://buymeacoffee.com/andreandyp" target="_blank")
        v-card-actions.d-none.d-sm-flex.justify-end
            v-spacer
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(:append-icon="mdiTranslate" color="secondary" v-bind="props") {{ currentLocale }}
                v-list
                    v-list-item(v-for="locale in locales" @click="changeLanguage(locale.code)" link)
                        v-list-item-title {{ locale.text }}
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(:append-icon="mdiThemeLightDark" color="secondary" v-bind="props") {{ currentThemeName }}
                v-list
                    v-list-item(v-for="(theme, index) in availableThemes" @click="changeTheme(index)" link)
                        v-list-item-title {{ theme }}
        v-card-actions.d-flex.d-sm-none.justify-end
            div.ms-2(v-show="showSupport")
                v-btn(:prepend-icon="mdiHandCoin" :aria-label="$t('hero.coffee')" variant="elevated" rounded="rounded" color="#FFD700" href="https://buymeacoffee.com/andreandyp" target="_blank") {{ $t('hero.coffee') }}
            v-spacer
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(:icon="mdiTranslate" color="secondary" v-bind="props")
                v-list
                    v-list-item(v-for="locale in locales" @click="changeLanguage(locale.code)" link)
                        v-list-item-title {{ locale.text }}
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(:icon="mdiThemeLightDark" color="secondary" v-bind="props")
                v-list
                    v-list-item(v-for="(theme, index) in availableThemes" @click="changeTheme(index)" link)
                        v-list-item-title {{ theme }}
</template>

<script setup lang="ts">
import { ref, computed, watch, type ComputedRef } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme, useDisplay } from "vuetify";
import { mdiGithub, mdiLinkedin, mdiAt, mdiTranslate, mdiThemeLightDark, mdiHandCoin } from "@mdi/js";
import { name } from "../../package.json";
import { type LanguageChooser } from "@/types/LanguageChooser.ts";

const { tm, locale, availableLocales } = useI18n();
const { global } = useTheme();
const { mobile } = useDisplay();

const availableLanguages = ref(tm("hero.languages") as string[]);
const availableThemes = ref(tm("hero.themes") as string[]);
const currentTheme = ref(2);

watch(locale, () => {
    availableLanguages.value = tm("hero.languages");
    availableThemes.value = tm("hero.themes");
});

watch(currentTheme, (newValue: number) => {
    switch (newValue) {
        case 0:
            global.name.value = "pageThemeLight";
            break;
        case 1:
            global.name.value = "pageThemeDark";
            break;
        case 2:
            global.name.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "pageThemeDark" : "pageThemeLight";
            break;
    }
});

const locales: ComputedRef<LanguageChooser[]> = computed<LanguageChooser[]>(() =>
    availableLanguages.value
        .map((lang, index) => ({ code: availableLocales[index] ?? "", text: lang }))
);

const currentLocale = computed(() =>
    locales.value
        .filter(value => locale.value.includes(value.code))[0]?.text ?? ""
);

const currentThemeName = computed(() => availableThemes.value[currentTheme.value]);

const showSupport = computed(() => currentLocale.value.includes("En"));

function click64Icon() {
    const character = String.fromCharCode(64);
    const separator = String.fromCharCode(46);
    const index = name.indexOf(separator);
    const service = "outlook";
    window.location.href = `mailto:${name.substring(0, index)}${character}${service}${separator}com`;
}

function changeLanguage(localeValue: string) {
    locale.value = localeValue;
}

function changeTheme(index: number) {
    currentTheme.value = index;
}
</script>