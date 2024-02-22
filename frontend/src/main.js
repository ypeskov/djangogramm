import {createApp} from 'vue';

import Like from './components/Like.vue';
import Follow from './components/Follow.vue';

createApp({
  components: {
    Follow,
    Like,
  }
}).mount('#app');
