<template>
  <div id="app">
    <div class="container">
      <div class="timeline"> 

        <div class="post" v-bind:key="post.id" v-for="post in timeline">
          <div class="info">
          <div class="prof"> 
            <img class="pic" v-bind:src="post.photo"/>
             <div class="user">
               <h1>{{post.display_name}}</h1>
               <span>{{post.username}}</span>
          </div>
  
          </div>
          <img class="icon" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png">
          </div>

          <p>{{post.text}}</p>
       
              <div class="mood-properties"> 

            <div class="feature"> 
              <img src="https://vignette.wikia.nocookie.net/csydes-test/images/a/ac/Discord_Emoticon_Happy.png/revision/latest?cb=20180601003844">
              <h3> 90% happy</h3>
            </div>

             <div class="feature"> 
              <img src="http://assets.stickpng.com/thumbs/586294c83796e30ac4468735.png">
              <h3> 3% happy</h3>
            </div>

             <div class="feature"> 
              <img src="https://imagejournal.org/wp-content/uploads/2017/03/1f60b.png">
              <h3> 7% happy</h3>
            </div>
          </div>
        <span class="date">{{post.created_at}}</span>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
   computed: {
        timeline() {
            return this.$store.getters.getDashboardTimeline;
        }
    },

  created() {
    this.$store.dispatch('loadTimeline');
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

.timeline {
  display:flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
  margin-top: 5%;
}
.prof {
  display:flex;
  align-items: center;
  width: 400px;
  margin-left: 5%;

}
.info {
  display:flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3%;
  justify-content: space-between;
}

.prof .pic {
  border-radius: 50%;
  background-image: linear-gradient(to right top, #e0e03a, #e6c923, #eab211, #ec9b0b, #eb8312);   
  width: 65px;
  height: 65px;
}

.prof .user {
  margin-left: 6%;
}
.prof span {
  font-size: 16px;
  color: grey;
  font-weight: 500;
}

.prof h1 {
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
}
.info img.icon {
  width: 50px;
  height: 50px;
  margin-right: 4%;
}
.post {
  flex: 1;
  width: 75%;
  border: 1px solid white;
  border-radius: 13px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);   
  margin-bottom: 5%;
}
.post span.date {
  float: right;
  margin-right: 3%;
  margin-bottom: 2%;
  color: grey;
  font-weight: 300;
  font-style: italic;
  font-size: 16px;
}
.post p {
  font-size: 20px;
  width: 80%;
  margin: 2% 5%;

}

.mood-properties {
  display: flex;
  justify-content: center;
  align-self: center;
}

.feature {
  margin-right: 70px;
  margin-left: 70px;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
.feature img {
  width: 35px;
  height:35px;
}

.feature h3 {
  font-size: 15px;
  text-align: center;
  margin-top: 0;
}




</style>
