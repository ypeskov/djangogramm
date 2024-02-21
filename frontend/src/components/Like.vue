<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['postId']);

const likes = ref(0);
const userLikes = ref(false);

onMounted(async () => {
  const response = await fetch(`/posts/${props.postId}/get-likes/`);
  let likesData = await response.json();
  likes.value = likesData['likes'];
  userLikes.value = likesData['user_likes'];
});

async function like() {
  const response = await fetch(`/posts/${props.postId}/like/`);
  let likesData = await response.json();
  likes.value = likesData['likes'];
  userLikes.value = likesData['user_likes'];
}
</script>

<template>
  <div class="mb-3">
    <button class="btn" :class="{'btn-warning': userLikes, 'btn-primary': !userLikes}" @click="like">
      {{ userLikes ? 'Unlike' : 'Like' }}
    </button>
    <span class="ms-3">{{ likes }} likes</span>
  </div>
</template>

<style scoped>

</style>
