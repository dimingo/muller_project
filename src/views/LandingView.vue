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
  <SectionComponent background="bg-white " text="text-black">
    <template #leftTitle>
      Have an idea or an epic project in mind? Talk to us. Let's work together
      and make something great. Drop us a line at
      <a class="text-orange-500"> hello@mueller.com</a>.
    </template>
    <template #rightTitle>
      <div class="text-black font-sans mt-14 ml-12">
        <h3 class="font-semibold uppercase tracking-widest mt-16 mb-4 w-34">
          where to find us
        </h3>
        <p class="text-xl font-sans-serif text-slate-600 my-2">
          1600 Amphitheatre Parkway
        </p>
        <p class="text-xl font-sans-serif text-slate-600 mb-2">
          Mountain View, California
        </p>

        <p class="text-xl font-sans-serif text-slate-600">94043 US</p>

        <h6 class="font-bold my-2 uppercase tracking-widest mt-8 mb-4">
          CONTACT INFOS
        </h6>
        <p class="text-xl font-sans-serif">+197 543 2345</p>
        <p class="text-xl font-sans-serif">+197 543 2345</p>
      </div>
    </template>

    <template #content>
      <section class="flex mt-10">
        <div class="flex w-1/2 mx-6">
          <talk-button />
        </div>

        <div class="w-1/2 mx-6">
          <subscribe-button />
        </div>
      </section>
    </template>
  </SectionComponent>
  <footer-component />
</template>

<script setup>
import SectionComponent from "../components/SectionComponent.vue";
import Gallery from "../components/Gallery.vue";
import navbar from "../components/layout/header/NavComponent.vue";
import hero from "../components/layout/header/HeroComponent.vue";
import brands from "../components/Brands.vue";
import carousel from "../components/carousel.vue";
import TalkButton from "../components/TalkButton.vue";
import SubscribeButton from "../components/subscribeButton.vue";
import FooterComponent from "../components/layout/footer/FooterComponent.vue";
</script>