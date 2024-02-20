<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['userId']);

const isFollowing = ref(false);

onMounted(async () => {
  const response = await fetch(`/users/${props.userId}/`);
  let userInfo = await response.json();
  isFollowing.value = userInfo['is_following'];
});

async function toggleFollow() {
  const response = await fetch(`/users/${props.userId}/follow/`);
  let userInfo = await response.json();
  isFollowing.value = userInfo['is_following'];
}
</script>

<template>
  <div class="mb-3">
    <button class="btn" :class="{'btn-warning': isFollowing, 'btn-success': !isFollowing}" @click="toggleFollow">
      {{ isFollowing ? 'Unfollow' : 'Follow' }}
    </button>
  </div>
</template>

<style scoped>

</style>
