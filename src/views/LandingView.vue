<!-- This example requires Tailwind CSS v3.0+ -->
<template >
  <navbar />
  <hero />
  <SectionComponent background="bg-white" text="text-black" />

  <SectionComponent background="bg-slate-50" text="text-black" />
  <SectionComponent text="text-white">
    <template #content>
      <Gallery />
    </template>
  </SectionComponent>
  <section class="container  p-24">
    <div class="flex">
      <brands />
      <brands />
      <brands />
      <brands />
    </div>
    <div class="flex">
      <brands />
      <brands />
      <brands />
      <brands />
    </div>
  </section>
</template>

<script setup>
import SectionComponent from "../components/SectionComponent.vue";
import Gallery from "../components/Gallery.vue";
import navbar from "../components/layout/header/NavComponent.vue";
import hero from "../components/layout/header/HeroComponent.vue";
import brands from "../components/Brands.vue";
</script>