<template>
  <div
    class="
      group
      w-1/2
      m-auto
      flex
     
      text-center
      relative
      overflow-hidden
      cursor-pointer
      justify-center
    "
  >
    <img lg: src="/images/images/folio/white_turban@2x.jpg" class="
    group-hover:scale-105 w-full ease-in-out transition duration-500
    object-contain transform-all"/>

    <!-- background div -->
    <div
      class="
        container
        absolute
        bg-black
        h-full
        w-full
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-50
      "
    >
      <div class="m-4">
        <div
          class="
            flex
            text-white-200
            font-regular
            text-sm
            transition-all
            justify-start
          "
        >
          Frontend Design
        </div>
        <div class="flex text-white font-medium text-lg justify-start">
          White Turban
        </div>
      </div>

      <div class="flex text-white font-bold justify-center"><EllipsisHorizontalIcon class="text-white badge w-48 m-40"/></div>
    </div>
  </div>
</template>
<script setup>
import { PlayIcon,  EllipsisHorizontalIcon } from "@heroicons/vue/24/outline";


</script>
