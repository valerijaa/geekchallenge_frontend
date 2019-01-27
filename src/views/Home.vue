<template>
  <div id="app">
   <Timeline />
  </div>
</template>

<script>

import Timeline from '../components/Timeline.vue'
export default {
  name: 'Home',
  components: {
    Timeline,
  },
   computed: {
        // timeline() {
        //     return this.$store.getters.getDashboardTimeline;
        // }
    },

  created() {
    // this.$store.dispatch('loadTimeline');
  },
  methods: {
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
