<template>
  <div class="w-100 h-100">
    <v-navbar />
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/layout/NavBar.vue';

export default {
  name: 'App',
  components: {
    'v-navbar': NavBar,
  },
};
</script>
