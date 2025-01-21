<template lang="pug">
v-container
    v-card(elevation="2" border)
        v-card-title
            h1.text-wrap {{ $t("hero.title") }}
        v-card-subtitle
            h2.text-wrap {{ $t("hero.subtitle") }}
        v-card-text.d-flex.ga-2
            v-btn(icon="mdi-github" href="https://github.com/AndreAndyP" target="_blank" color="primary")
            v-btn(icon="mdi-linkedin" href="https://www.linkedin.com/in/andreandyp" target="_blank" color="primary")
            v-btn(icon="mdi-at" @click="click64Icon" target="_blank" color="primary")
        v-card-actions.d-none.d-sm-flex.justify-end
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(append-icon="mdi-translate" color="secondary" v-bind="props") {{ currentLocale }}
                v-list
                    v-list-item(v-for="locale in locales" @click="changeLanguage(locale.code)" link)
                        v-list-item-title {{ locale.text }}
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(append-icon="mdi-theme-light-dark" color="secondary" v-bind="props") {{ currentThemeName }}
                v-list
                    v-list-item(v-for="(theme, index) in availableThemes" @click="changeTheme(index)" link)
                        v-list-item-title {{ theme }}
        v-card-actions.d-flex.d-sm-none.justify-end
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(icon="mdi-translate" color="secondary" v-bind="props")
                v-list
                    v-list-item(v-for="locale in locales" @click="changeLanguage(locale.code)" link)
                        v-list-item-title {{ locale.text }}
            v-menu(location="bottom")
                template(v-slot:activator="{ props }")
                    v-btn(icon="mdi-theme-light-dark" color="secondary" v-bind="props")
                v-list
                    v-list-item(v-for="(theme, index) in availableThemes" @click="changeTheme(index)" link)
                        v-list-item-title {{ theme }}
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";
import { name } from "../../package.json";
import { type LanguageChooser } from "@/types/LanguageChooser.ts";

const { tm, locale, availableLocales } = useI18n();
const { global } = useTheme();

const availableLanguages = ref(tm("hero.languages") as string[]);
const availableThemes = ref(tm("hero.themes") as string[]);
const currentTheme = ref(2);
const currentThemeName = ref(tm("hero.themes")[2]);

watch(locale, () => {
    availableLanguages.value = tm("hero.languages");
    availableThemes.value = tm("hero.themes");
});

watch(currentTheme, (newValue: number) => {
    currentThemeName.value = availableThemes.value[newValue];
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

const locales = computed<LanguageChooser[]>(() =>
    availableLanguages.value
        .map((lang, index) => ({ code: availableLocales[index], text: lang }))
);

// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentLocale = computed(() =>
    locales.value
        .filter(value => locale.value.includes(value.code))[0]
        .text
);

// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function click64Icon() {
    const character = String.fromCharCode(64);
    const separator = String.fromCharCode(46);
    const index = name.indexOf(separator);
    const service = "outlook";
    window.location.href = `mailto:${name.substring(0, index)}${character}${service}${separator}com`;
}

// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function changeLanguage(localeValue: string) {
    locale.value = localeValue;
}

// @ts-expect-error TS and pug problem
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function changeTheme(index: number) {
    currentTheme.value = index;
}
</script>