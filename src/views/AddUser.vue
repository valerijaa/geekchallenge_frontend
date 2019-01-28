<template>
  <div>
    <div class="container">

      <template class="login-form" v-if="isLoginFormVisible">
        <!-- Login -->
        <form @submit.prevent="loginFormSubmitted">
          <h1>Log in to the Moodyla</h1>

          <label class="form__label" for="name">Username</label>
          <input type="text" class="name form__input" v-model="loginForm.username">
          
          <label class="form__label" for="name">Password</label>
          <input type="password" class="name form__input" v-model="loginForm.password">
          
          <input type="submit" value="Login" class="btn" />

          <p v-show="loginForm.errorMessage">
            {{loginForm.errorMessage}}
          </p>
        <br>
         <p class="login-toggle-button"> If you still dont have an account on Moodyla, please <a v-on:click="isLoginFormVisible=false" style="color: red; cursor: pointer"> Sign up here </a> </p>
   
        </form>

      </template>
      <template class="registration-form" v-else>
       

        <!-- Registration -->
        <form @submit.prevent="registrationFormSubmitted">
          <h1>Create your first account</h1>

          <label class="form__label" for="name">Name</label>
          <input type="text" class="name form__input" v-model="registrationForm.name">

          <label class="form__label" for="name">Username</label>
          <input type="text" class="name form__input" v-model="registrationForm.username">
          
          <label class="form__label" for="name">Password</label>
          <input type="password" class="name form__input" v-model="registrationForm.password">

          <p class="error" v-show="registrationForm.errorMessage">
            {{registrationForm.errorMessage}}
          </p>
          
          <input type="submit" value="Register" class="btn" />

            <p class="reg-toggle-button"> If you already have an account on Moodyla, please <a v-on:click="isLoginFormVisible=false" style="color: red; cursor: pointer"> Log in here </a> </p>
        </form>
      </template>
    </div>
  </div>
</template>

<script>
import { userService } from '../services/UserService';
export default {
  name: "AddUser",
  data() {
    return {
      isLoginFormVisible: true,
      loginForm:{
        username: "",
        password: "",
        errorMessage: null
      },
      registrationForm:{
        username: "",
        name: "",
        password: "",
        errorMessage: null
      },
    };
  },
  methods: {
    login(username, password){
      var self = this;
      
      userService.login(username, password)
        .then(function(){
          self.$router.push('home');
        })
        .catch(error => {
          self.loginForm.errorMessage = error;
        });
    },
    loginFormSubmitted(e){
      e.preventDefault();
      this.login(this.loginForm.username, this.loginForm.password);
    },
    registrationFormSubmitted(e) {
      var self = this;

      e.preventDefault();
      userService.register(this.registrationForm.name, this.registrationForm.username, this.registrationForm.password)
        .then(function(){
          self.login(self.registrationForm.username, self.registrationForm.password);
        })
        .catch(error => {
          /*   eslint-disable no-console */
          console.error(error);
          /* eslint-enable no-console */
          self.registrationForm.errorMessage = error;
        });

    }
  },
  mounted: function(){
     if (userService.isLoggedIn()){
       this.$router.push('home');
     }
  }
};
</script>

<style scoped>

.container {
  display: flex;
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
        margin-top: 5%;
    }

    .container h1 {
        font-size: 35px;
        font-weight: 400;
        color: black;

    }

    input {
        display: block;
    }
    
    input[type=text], input[type=password] {
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
        font-weight: bold;
    }

.login-toggle-button {
      margin-top: 14%;
      text-align: left;
      font-size: 19px;
}

.reg-toggle-button {
      margin-top: 18%;
      text-align: left;
      font-size: 20px;
}
</style>

