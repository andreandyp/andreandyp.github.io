import { type ThemeDefinition } from "vuetify";
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi-svg";
import * as components from "vuetify/components";
// @ts-expect-error some random type error with vuetify styles
import "vuetify/styles";

const white = "#FFFFFF";
const black = "#000000";
const hexRed = "#FF0000";

const redDarken4 = "#B71C1C";
const purpleDarken3 = "#6A1B9A";
const redAccent4 = "#D50000";
const deepPurpleLighten3 = "#B39DDB";
const pageThemeLight: ThemeDefinition = {
    dark: false,
    colors: {
        primary: redDarken4,
        secondary: purpleDarken3,
        "on-primary": white,
        "on-secondary": white,
        background: white,
        "on-background": black,
        error: hexRed,
        "on-error": white,
    },
};

const pageThemeDark: ThemeDefinition = {
    dark: true,
    colors: {
        primary: redAccent4,
        secondary: deepPurpleLighten3,
        "on-primary": white,
        "on-secondary": black,
        background: black,
        "on-background": white,
        error: hexRed,
        "on-error": white,
    },
};

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: isDark ? "pageThemeDark" : "pageThemeLight",
        themes: {
            pageThemeLight,
            pageThemeDark,
        }
    },
    components: components,
});