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
  <div class="container justify-center flex items-center lg:w-full md:w-full">
    <h2 class="p-2 text-white text-5xl">
      Brands we had priveledge to work with
    </h2>
  </div>

  <section class="container m-24 m-auto justify-center items-center">
    <div class="flex">
      <brands path="images/images/clients/volume.svg" />
      <brands path="images/images/clients/snowflake.svg" />
      <brands path="images/images/clients/vision.svg" />
      <brands path="images/images/clients/pinpoint.svg" />
    </div>
    <div class="flex">
      <brands path="images/images/clients/hitech.svg" />
      <brands path="images/images/clients/flash.svg" />
      <brands path="images/images/clients/proline.svg" />
      <brands path="images/images/clients/rise.svg" />
    </div>
  </section>
  <section>
    <carousel />
  </section>
</template>

<script setup>
import SectionComponent from "../components/SectionComponent.vue";
import Gallery from "../components/Gallery.vue";
import navbar from "../components/layout/header/NavComponent.vue";
import hero from "../components/layout/header/HeroComponent.vue";
import brands from "../components/Brands.vue";
import carousel from "../components/carousel.vue";
</script>