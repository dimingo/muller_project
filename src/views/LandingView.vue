<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <navbar />
  <hero />
  <SectionComponent />

  <SectionComponent />
  <SectionComponent >
    <template #content>
      <Gallery/>
    </template>
  </SectionComponent>
</template>

<script setup>
import SectionComponent from "../components/SectionComponent.vue";
import Gallery from "../components/Gallery.vue";
import navbar from "../components/layout/header/NavComponent.vue";
import hero from "../components/layout/header/HeroComponent.vue";
</script>