<template>
  <div class="lg:px-6 py-12" :class="background">
    <div class="container mx-auto flex flex-col md:flex-row items-center p-8">
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start">
        <h1 class="font-regular text-6xl px-auto text-gray-300 tracking-loose">
          02
        </h1>
        <h2
          class="text-4xl leading-relaxed md:leading-snug mb-2 ml-n2"
          :class="text"
        >
          Muller is a branding agency in Somewhere. We shape brand idntities and
          design thoughtful digital experiences
        </h2>
      </div>
      <div
        class="flex flex-col w-full lg:w-1/2 justify-center items-start ml-6"
      >
        <h3 class="text-gray-400 text-2xl font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          quisquam blanditiis assumenda natus sequi necessitatibus rem commodi
          voluptate veniam id perferendis dolorem neque, labore, nesciunt illum.
        </h3>
      </div>
    </div>
    <slot name="content">
      <div class="flex p-14">
        <SectionCard />
        <SectionCard />
      </div>
      <div class="flex p-14 p-auto">
        <SectionCard />
        <SectionCard />
      </div>
    </slot>
  </div>
</template>
<script setup>
import SectionCard from "./SectionCard.vue";

defineProps({
  background: String,
  text: String,
});
</script>
