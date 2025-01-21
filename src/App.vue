<script setup lang="ts">
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import WorkExperiencie from "./components/WorkExperiencie.vue";
import SideProjects from "./components/SideProjects.vue";
import More from "./components/MoreExperience.vue";
import Copyright from "./components/Copyright.vue";
</script>

<template>
  <v-app>
    <v-main>
      <Hero />
      <AboutMe />
      <WorkExperiencie />
      <SideProjects />
      <More />
      <Copyright />
    </v-main>
  </v-app>
</template>
