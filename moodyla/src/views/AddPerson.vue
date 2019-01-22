<template>

<div>
    <div class="container">
    <form @submit="AddPerson">      
        <h1>Add new person</h1>
        <label for="name">Name</label>
        <input type="text" class="name" v-model="name" name="name">

        <label for="media">Choose social media</label>
        <div class="social">
           <label class="twitter">
              <input type="radio" v-model="socialNetwork" value="twitter" >
                <img v-bind:class="{ active: socialNetwork === 'twitter' }" src="http://assets.stickpng.com/thumbs/5a2fe3efcc45e43754640848.png">
        </label>
          <label class="insta">
              <input type="radio" v-model="socialNetwork" value="instragram">
                <img v-bind:class="{ active: socialNetwork === 'instragram' }" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png">
        </label>
          <label class="fb">
              <input type="radio" v-model="socialNetwork" value="facebook">
                <img v-bind:class="{ active: socialNetwork === 'facebook' }" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
        </label>
        </div>
        <label for="username">Username</label>
            <input type="text" class="username" v-model="username" name="username">

        <input type="submit" value="Add" class="btn">
    </form>
    </div>

</div>
    
</template>




<script>
export default {
    name: "AddPerson",
    data() {
        return {
            name: '',
            socialNetwork: '',
            username: ''
        }
    },
    methods: {
        AddPerson(e) {
            e.preventDefault();
            const newPerson = {
                id: 99,
                name: this.name,
                username: this.username,
                socialMedia: this.socialNetwork
            }

            this.$store.commit('addPerson', newPerson);

            this.name = '';
            this.username = '';
            this.socialNetwork = '';
        }
    }
}
</script>





<style scoped>
    .container {
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container form {
        width: 40%;
    }

    .container label {
        display: block;
        margin-left: 3%;
        font-size: 16px;
        color: grey;
        font-weight: 500;
        margin-top: 10%;
    }

    .container h1 {
        font-size: 35px;
        font-weight: 400;
        color: black;

    }

    input {
        display: block;
    }
    
    input[type=text] {
        width: 100%;
        padding: 18px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid white;
        border-radius: 13px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.07);   
        }   

    input[type=submit] {
        background-image: linear-gradient(to right top, #e0e03a, #e6c923, #eab211, #ec9b0b, #eb8312);   
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border: 2px solid;
        border-radius: 30px;
        color: white;
        float: right;
        margin-top: 4%;
        cursor: pointer;
    }

     
    .social {
        text-align: center;
        margin-top: -7%;
        }
    .social label { 
        display: inline-block;
        width: 15%;
        height: 15%;
        text-align: center;
        margin-left: 8%;
        margin-right: 8%;
    }

    .social img {
        width: 100%;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);  
        border-radius: 50%;
    }
 
    /* HIDE RADIO */
    [type=radio] { 
        opacity: 0;
        width: 0;
        height: 0;
    } 

    /* IMAGE STYLES */
    [type=radio]+ img {
        cursor: pointer;
    }

    [type=radio]+ img.active {
        border: 3px solid red;
    }

</style>

