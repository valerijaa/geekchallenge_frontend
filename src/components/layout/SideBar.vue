<template>
<div class="wrapper"> 
    <div class="back-home">
      <router-link class="home" to="/">moodyla</router-link> 
   
    </div>

    <div class="profile"> 
        <div class="wrap-profile">
            <div class="photo"> </div>
            <div class="name"> 
                <h1>{{profile.name}}</h1>
                <span>{{profile.username}}</span>
            </div>
        </div>
    <div class="logout-button-wrap">
    <button v-on:click="logout()">Logout</button>  
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
import { userService } from '../../services/UserService';

export default {
    name: "SideBar",
    components: {
        People
    },
    computed: {
        profile(){
            return userService.getProfile();
        }
    },
    methods: {
        logout(){
            userService.logout();
            this.$router.push('login');
        }
    }
}
</script>


<style scoped>

    .wrapper {
        display: grid;
        grid-template-rows: 8% 20% 65% 7%;
    }
    .wrap-profile {
        border-bottom: 3px solid #fdfdfd;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
    }

    .profile {
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .logout-button-wrap {
        width: 100%;
    }
    .logout-button-wrap button {
        background-color:#73c2fb;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        font-size: 12px;
        border: 2px solid;
        border-radius: 30px;
        color: white;
        float: right;
        margin-top: 4%;
        cursor: pointer;
        margin-right: 20px;
    }

     .profile button:hover {
         background-color: #57a0d2;
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
        overflow-y: scroll;
    }

    /* style for scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #dcdcdc; 
        
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: #dcdcdc; 
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

