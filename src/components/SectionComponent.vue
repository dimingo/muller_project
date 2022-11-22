<template>
  <div class="relative bg-white lg:px-6 pt-6">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
        <h1
          class="
            text-6xl
            font-bold
            md:text-5xl
            p-2
            text-yellow-300
            tracking-loose
          "
        >
          01
        </h1>
        <h2
          class="
            text-3xl
            md:text-5xl
            text-black
            leading-relaxed
            md:leading-snug
            mb-2
            ml-n2
          "
        >
          Muller is a branding agency in Somewhere. We shape brand idntities and
          design thoughtful digital experiences
        </h2>
      </div>
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
        <p class="text-gray-400 text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          quisquam blanditiis assumenda natus sequi necessitatibus rem commodi
          voluptate veniam id perferendis dolorem neque, labore, nesciunt illum.
        </p>
      </div>
    </div>
    <slot name="content">
      <div class="flex">
        <SectionCard />
        <SectionCard />
      </div>
      <div class="flex">
        <SectionCard />
        <SectionCard />
      </div>
    </slot>
  </div>
</template>
<script setup>
import SectionCard from "./SectionCard.vue";
</script>
