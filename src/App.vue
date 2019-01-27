<template>
  <div id="app">
    <div class="wrapper"> 
      <div class="aside" v-if="isLoggedIn()">
        <SideBar />
      </div>

      <div class="main">
        <router-view/>
      </div>
    </div>
   
    
  </div>
</template>

<script>
import SideBar from './components/layout/SideBar'
import { userService } from './services/UserService';

export default {
  name: "app",
  components: {
    SideBar
  },
  computed: {
    isLoggedIn(){
      return userService.isLoggedIn;
    }
  }
}
</script>



<style>

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #737373;

}

.wrapper {
  display: flex;
  flex-flow: row wrap;
  height: 100vh;
}
.wrapper > * {
  flex: 1 100%;
 
}

.aside {
  background-color: white;
  flex: 0.5 0px;


}

h1 {
  margin:0;
}

.main {
  background-color: #fbfbfb;
  flex: 2 0px;
  overflow: auto;
}
</style>
