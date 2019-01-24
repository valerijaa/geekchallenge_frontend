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
    Timeline
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

.full-profile .image {
   width: 100px;
   height: 100px;
   background-color: rebeccapurple;
   border-radius: 50%;
}

.full-profile .name {
  padding: 50px;
  
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
/* .post span.date {
  float: right;
  margin-right: 3%;
  margin-bottom: 2%;
  color: grey;
  font-weight: 300;
  font-style: italic;
  font-size: 16px;
} */
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

/* style for expand element */
input[type='checkbox'] {
  display: none;
}

.label-toggle {
  display: block;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
 
  cursor: pointer;
  border-radius: 7px;
  -webkit-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  color:#6f6f6f;
}


.label-toggle:hover {
  color: black;
}

.label-toggle::before {
  content: ' ';
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);
  transition: transform .2s ease-out;
}

.expand-content .inner-content {
  background: rgb(247, 247, 247);;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  padding: .5rem 1rem;
}

.expand-content {
  max-height: 0px;
  overflow: hidden;

  transition: max-height .25s ease-in-out;
}

.toggle:checked + .label-toggle + .expand-content {
  max-height: 700px;
}

.toggle:checked + .label-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.toggle:checked + .label-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.components {
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
}
.components .social, .language, .emotional {
  width: 250px;
  height: 200px;
  margin: 20px;
  border: 1px solid white;
  border-radius: 13px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}
.components .social, .language, .emotional, h2 {
  text-align: center;
  font-size: 22px;
  color: black;
  padding-top: 6px;
}

.components .social, .language, .emotional, ul {
    text-align: left;
    list-style-type: none;
    color: grey;
    font-size: 18px;

}

.components .social, .language, .emotional, ul, li {
  padding-bottom: 6px;  
}

.components .statistics, h4 {
  font-size: 22px;
  text-align: center;
  color: black;
}
.statistics img {
  width: 100%;
}

</style>
