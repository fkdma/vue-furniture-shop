<template>
  <div
    id="store"
    class="container-fluid d-flex flex-column px-0"
  >
    <v-header />
    <div class="container d-flex flex-row mt-4">
      <v-content />
      <v-left-menu />
    </div>
  </div>
</template>
<script>
import Header from '@/components/store/Header.vue';
import LeftMenu from '@/components/store/LeftMenu.vue';
import Content from '@/components/store/Content.vue';

export default {
  name: 'Store',
  components: {
    'v-header': Header,
    'v-left-menu': LeftMenu,
    'v-content': Content,
  },
};
</script>
<style scoped>
#store {
  min-height: calc(100% - 56px);
  height: calc(100% - 56px);
}
</style>
