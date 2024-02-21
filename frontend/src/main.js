import {createApp} from 'vue';

import Like from './components/Like.vue';
import Follow from './components/Follow.vue';

document.querySelectorAll('[id^="like-"]').forEach(el => {
  createApp({
    components: {
      Like,
    }
  }).mount(`#${el.id}`);
});

createApp({
  components: {
    Follow,
  }
}).mount('#follow');
