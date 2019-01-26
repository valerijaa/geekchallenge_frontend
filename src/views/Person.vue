<template>

  <div>
    <!-- Person info -->
    <div class="wrap" v-if="person">
        <div class="person-container">
          <div class="full-profile">
            <img class="image">
            <div class="name">
              <h1>{{person.name}}</h1>
              <span>{{person.username}}</span>
            </div>
          </div>

          <div class="accounts">
            <div class="socialmedia">
              <img src="http://assets.stickpng.com/thumbs/5a2fe3efcc45e43754640848.png">
              <h3>@{{person.username}}</h3>
            </div>
            <!-- <div class="socialmedia">
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png"
              >
              <h3>ello__</h3>
            </div>
            <div class="socialmedia">
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png"
              >
              <h3>ello__</h3>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <Timeline :person-id="$route.params.id"/>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';
export default {
  name: "Person",
  components: {
    Timeline
  },
  computed: {
    person() {
      return this.$store.getters.getPerson(this.$route.params.id);
    }
  },
  created() {
    
  }
};
</script>

<style scoped>
</style>
