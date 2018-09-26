<template>
  <div>
    <app-navbar></app-navbar>
    <component :is="currentPage"></component>
  </div>
</template>

<script>
  import Nav from './components/Navbar.vue';
  import Home from './components/Home.vue';

  export default {
    data () {
      return {
        currentPage: 'app-home',
      }
    },
    components: {
      appNavbar: Nav,
      appHome: Home,
    },
  }
</script>

<style>

</style>
