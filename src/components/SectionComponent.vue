<template>
  <div class="lg:px-6 p-24" :class="background">
    <div class="container mx-auto flex flex-col md:flex-row items-center p-8">
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start">
        <div>
          <h1
            class="font-regular text-6xl px-auto text-gray-300 tracking-loose"
          >
            02
          </h1>

          <h3
            class="
              text-xl
              -mt-24
              -ml-1
              px-auto px-2
              w-34
              h-8
              font-regular
              tracking-widest
              text-orange-600
              justify-center
              items-center
            "
          >
            WHAT WE DO
          </h3>
        </div>

        <div class="mt-12">
          <h2
            class="text-4xl leading-relaxed md:leading-snug mb-2 -ml-2"
            :class="text"
          >
            <slot name="leftTitle">
              Mueller is a branding agency based in Somewhere. We shape brand
              identities and design thoughtful digital experiences.
            </slot>
          </h2>
        </div>
      </div>

      <div
        class="
          flex flex-col
          w-full
          lg:w-1/2
          justify-center
          items-start
          ml-6
          mt-20
          py-auto
          pt-14
        "
      >
        <slot name="rightTitle">
          <h3 class="text-gray-400 text-2xl font-thin">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            quisquam blanditiis assumenda natus sequi necessitatibus rem commodi
            voluptate veniam id perferendis dolorem neque, labore, nesciunt
            illum.
          </h3>
        </slot>
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
