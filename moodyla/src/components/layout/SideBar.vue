<template>
<div class="wrapper"> 
    <div class="back-home">
      <router-link class="home" to="/">moodyla</router-link> 
    </div>

    <div class="profile"> 
        <div class="photo"> </div>
        <div class="name"> 
            <h1>Elgars Logins </h1>
            <span> ello1445 </span>
        </div>
       
    </div>
    <div class="people">
        <h1> People </h1>
        <div class="people-list"> 
             <People/> 
        </div>
    </div>

    <div class="add">
       <router-link class="button" to="/AddPerson">Add new person</router-link>
    </div>
</div>
</template>

<script>
import People from '../People';
// import axios from 'axios';
export default {
    name: "SideBar",
    components: {
        People
    },
    created() {
        //    axios.get('http://localhost:3000/people')
        //    .then(response => this.people = response.data);
    }
}
</script>


<style scoped>

    .wrapper {
        display: grid;
        grid-template-rows: 8% 20% 65% 7%;
    }
    .profile {
        border-bottom: 3px solid #fdfdfd;
        display:flex;
        justify-content: center;
        align-items: center;
        
    }

    .profile .photo {
        border-radius: 50%;
        background-image: linear-gradient(to right top, #e0e03a, #e6c923, #eab211, #ec9b0b, #eb8312);   
        width: 80px;
        height: 80px;
    }
    .profile .name {
        margin-left: 8%;
    }


    .profile .name h1 {
        font-size: 23px;
        color: black;
    }

    .profile .name span {
        font-size: 18px;
        color: grey;
        font-weight: 500;
    }

    .people {
        margin: 5% 7%;
        text-align: left;
    }

    .people h1 {
        font-size: 22px;
        font-weight: 500;
        color: black;
    }
    .back-home {
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .back-home a {
        text-decoration: none;
        color: black;
        font-size: 30px;
        font-weight: bold; 
    }
    .add {
        background-color: #4CAF50;   
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add a {
        text-decoration: none;
        color: white;
        font-size: 23px;
        font-weight: 400;
        margin: 0 auto;
    }
</style>

