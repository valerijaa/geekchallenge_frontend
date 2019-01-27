<template>
  <div>
    <div class="container">

      <template v-if="isLoginFormVisible">
        <button v-on:click="isLoginFormVisible=false">Register</button>

        <!-- Login -->
        <form @submit.prevent="loginFormSubmitted">
          <h1>Login</h1>

          <label class="form__label" for="name">Username</label>
          <input type="text" class="name form__input" v-model="loginForm.username">
          
          <label class="form__label" for="name">Password</label>
          <input type="password" class="name form__input" v-model="loginForm.password">
          
          <input type="submit" value="Login" class="btn" />

          <p v-show="loginForm.errorMessage">
            {{loginForm.errorMessage}}
          </p>
        </form>

      </template>
      <template v-else>
        <button v-on:click="isLoginFormVisible=true">Login</button>

        <!-- Registration -->
        <form @submit.prevent="registrationFormSubmitted">
          <h1>Create your first account</h1>

          <label class="form__label" for="name">Name</label>
          <input type="text" class="name form__input" v-model="registrationForm.name">

          <label class="form__label" for="name">Username</label>
          <input type="text" class="name form__input" v-model="registrationForm.username">
          
          <label class="form__label" for="name">Password</label>
          <input type="password" class="name form__input" v-model="registrationForm.password">

          <p v-show="registrationForm.errorMessage">
            {{registrationForm.errorMessage}}
          </p>
          
          <input type="submit" value="Register" class="btn" />
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
          // TODO: redirect to Home
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
  }
};
</script>

<style scoped>
</style>

