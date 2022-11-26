<template>
  <!-- ====== Brands Section Start -->

  <div class="client-list_item">
    <a href="#0">
      <img :src="path" alt="" />
    </a>
  </div>

  <!-- ====== Brands Section End -->
</template>
<script setup>
defineProps({
  path: String,
});
</script>

