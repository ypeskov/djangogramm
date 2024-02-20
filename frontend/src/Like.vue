<script setup>
import { ref } from 'vue';

const likes = ref(0);

function like() {
  likes.value++
}
</script>

<template>
  <div class="mb-3">
    <button class="btn btn-primary" @click="like">Like</button>
    <span class="ms-3">{{ likes }} likes</span>
  </div>
</template>

<style scoped>

</style>
