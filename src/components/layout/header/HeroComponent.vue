<template>
  <div
    class="
     
      container
      mx-auto
      flex flex-col
      md:flex-row
      items-center
      my-12
      px-8
      md:my-24
    "
  >
    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
      <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
        TechFest
      </h1>
      <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
        Space : The Timeless Infinity
      </h2>
      <p class="text-sm md:text-base text-gray-50 mb-4">
        <span class="text-gray-600">
          We provide creative solutions to turn your ideas into digital reality.
          <a href="#" class="font-semibold text-indigo-600"
            ><span class="absolute inset-0" aria-hidden="true" />Read more
            <span aria-hidden="true">&rarr;</span></a
          > </span
        >.
      </p>
      <div class="flex">
        <a
          href="#"
          class="
            bg-transparent
            hover:bg-white
            text-white
            hover:text-black
            rounded
            shadow
            whitespace-nowrap
            hover:shadow-lg
            px-2
			p-2
            border border-white
            hover:border-transparent
          "
        >
          Explore Now</a
        >
        <PlayIcon
          class="h-10 ml-3 border border-white rounded-full p-2"
        ></PlayIcon>
      </div>
    </div>
    <div
      class="
        p-8
        mt-12
        mb-6
        md:mb-0 md:mt-0
        ml-0
        md:ml-12
        lg:w-1/2
        justify-center
      "
    >
      
        
        <div>
          <img
            class="inline-block mt-28 hidden lg:block"
            src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
          />
        </div>
     
    </div>
  </div>
</template>
<script setup>
import { PlayIcon } from "@heroicons/vue/24/outline";
</script>
