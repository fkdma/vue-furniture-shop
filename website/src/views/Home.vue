<template>
  <div
    id="homepage"
    class="container-fluid d-flex flex-column px-0"
  >
    <v-banner />
  </div>
</template>
<script>
import Banner from '@/components/layout/Banner.vue';

export default {
  components: {
    'v-banner': Banner,
  },
};
</script>
<style scoped>
#homepage {
  min-height: calc(100% - 56px);
  height: calc(100% - 56px);
}
</style>
