<template>
  <div id="default-carousel" class="relative"  data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
       
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div>

      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/docs/images/carousel/carousel-2.svg"
          class="
            absolute
            block
            w-full
            -translate-x-1/2 -translate-y-1/2
            top-1/2
            left-1/2
          "
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/docs/images/carousel/carousel-3.svg"
          class="
            absolute
            block
            w-full
            -translate-x-1/2 -translate-y-1/2
            top-1/2
            left-1/2
          "
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="
        absolute
        top-0
        left-0
        z-30
        flex
        items-center
        justify-center
        h-full
        px-4
        cursor-pointer
        group
        focus:outline-none
      "
      data-carousel-prev
    >
      <span
        class="
          inline-flex
          items-center
          justify-center
          w-8
          h-8
          rounded-full
          sm:w-10 sm:h-10
          bg-white/30
          dark:bg-gray-800/30
          group-hover:bg-white/50
          dark:group-hover:bg-gray-800/60
          group-focus:ring-4 group-focus:ring-white
          dark:group-focus:ring-gray-800/70
          group-focus:outline-none
        "
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="
        absolute
        top-0
        right-0
        z-30
        flex
        items-center
        justify-center
        h-full
        px-4
        cursor-pointer
        group
        focus:outline-none
      "
      data-carousel-next
    >
      <span
        class="
          inline-flex
          items-center
          justify-center
          w-8
          h-8
          rounded-full
          sm:w-10 sm:h-10
          bg-white/30
          dark:bg-gray-800/30
          group-hover:bg-white/50
          dark:group-hover:bg-gray-800/60
          group-focus:ring-4 group-focus:ring-white
          dark:group-focus:ring-gray-800/70
          group-focus:outline-none
        "
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>