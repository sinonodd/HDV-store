<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view/>
  </div>
</template>

<script>
import AppNav from '@/components/app-nav.vue';
  export default {
    components: {
      AppNav,
    }
  };
</script>

<style lang="scss">
</style>
