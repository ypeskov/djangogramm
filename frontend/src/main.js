import { createApp } from 'vue';
import Like from './Like.vue';

document.querySelectorAll('[id^="like-"]').forEach(el => {
  createApp({
    components: {
      Like,
    }
  }).mount(`#${el.id}`);
});
