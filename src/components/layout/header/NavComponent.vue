<template>
  <div class="px-6 pt-6 lg:px-8">
    <div>
      <nav class="flex h-9 items-center justify-between font-sans" aria-label="Global">
        <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8" src="../../../assets/logo.svg" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="
              -m-2.5
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2.5
              text-gray-700
            "
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div
          class="
            hidden
            lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12
          "
        >
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class=" text-gray-900 "
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <a
            href="#"
            class="
              inline-block
              rounded-lg
              px-3
              py-1.5
              text-sm
              font-semibold
              leading-6
              text-white-900
              shadow-sm
              ring-1 ring-gray-900/10
              hover:ring-gray-900/20
            "
            >Log in</a
          >
        </div>
      </nav>
      <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <DialogPanel
          focus="true"
          class="
            fixed
            inset-0
            z-10
            overflow-y-auto
            bg-white
            px-6
            py-6
            lg:hidden
          "
        >
          <div class="flex h-9 items-center justify-between">
            <div class="flex">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8"  src="../../../assets/logo.svg" alt="" />
              </a>
            </div>
            <div class="flex">
              <button
                type="button"
                class="
                  -m-2.5
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  p-2.5
                  text-gray-700
                "
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-white">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="
                    -mx-3
                    block
                    rounded-lg
                    py-2
                    px-3
                    text-base
                    font-semibold
                    leading-7
                    text-gray-900
                
                  "
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="
                    -mx-3
                    block
                    rounded-lg
                    py-2.5
                    px-3
                    text-base
                    font-semibold
                    leading-6
                    text-white-900
                    hover:bg-white-400/10
                  "
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const mobileMenuOpen = ref(false);
const logo = "";
</script>