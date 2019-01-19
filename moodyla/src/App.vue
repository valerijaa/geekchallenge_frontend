<template>
  <div id="app">
    <AddPerson v-on:add-person="AddPerson"/>
    <People v-bind:people="people"/>
  </div>
</template>

<script>
import People from './components/People';
import AddPerson from './components/AddPerson';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    AddPerson,
    People
  },

  data() {
    return {
      people: []
    }
  },

  methods: {
    AddPerson(newPerson) {
      axios.post('http://localhost:3000/addperson', {
        name: newPerson.name,
        username: newPerson.username,
        socialMedia: newPerson.socialMedia
      })
      .then(res => this.people= [...this.people, res.data]);
      
    }
  },

  created() {
       axios.get('http://localhost:3000/people')
       .then(response => this.people = response.data);
  }
  
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
