import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddPerson from './views/AddPerson.vue'
import Person from './views/Person.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
