<template>

  <div>
    <!-- Person info -->
    <div class="wrap" v-if="person">
        <div class="person-container">
          <div class="full-profile">
            <div class="image">
               <avatar :username="person.name"
                  background-color="rebeccapurple"
                  color="#fff"
                  :size="100">
              </avatar>
            </div>
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
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <Timeline :person-id="$route.params.id"/>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'
import Timeline from '../components/Timeline.vue';
export default {
  name: "Person",
  components: {
    Timeline,
    Avatar
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
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.person-container {
  display:flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
  width: 45%;
  border: 1px solid white;
  border-radius: 13px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);   
}

.accounts {
  display: inline-flex;
  margin-bottom: 20px;
  width: 87%;
}

.accounts .socialmedia {
  display: flex;
  align-items: center;
      padding-left: 5%;
    padding-right: 5%;
  
}
.accounts img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  flex:1;
}


.full-profile {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.full-profile .name {
  padding: 50px;
  
}
</style>
