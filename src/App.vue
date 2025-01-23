<script setup lang="ts">
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import WorkExperiencie from "./components/WorkExperiencie.vue";
import SideProjects from "./components/SideProjects.vue";
import MoreExperience from "./components/MoreExperience.vue";
import Copyright from "./components/Copyright.vue";
</script>

<template lang="pug">
  v-app
    v-main
      Hero
      AboutMe
      WorkExperiencie
      SideProjects
      MoreExperience
      Copyright
</template>
