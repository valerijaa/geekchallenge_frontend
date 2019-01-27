import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import AddPerson from './views/AddPerson.vue'
import Person from './views/Person.vue'
import AddUser from './views/AddUser.vue'
import { userService } from './services/UserService'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/AddPerson',
      name: 'add-person',
      component: AddPerson
    },
    {
      path: '/person/:id',
      name: 'person',
      component: Person
    },
    {
      path: '/',
      name: 'login',
      component: AddUser,
      meta:{
        guest: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.guest)) {
    next()
  } else {
    // must be logged in to access page
    if(userService.isLoggedIn()){
      next()
    }
    else{
      next({ name: 'login'})
    }
  }
});

export default router;
