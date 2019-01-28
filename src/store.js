import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { userService } from './services/UserService'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // our state, our data
    state: {
        people: [],
        timeline: []
    },

    // for reading or returning or filtering data
    getters: {
        getPeople(state){
            return state.people;
        },
        getPeopleSortedByName(state){
            return state.people.sort(function(a, b) {
                return a.name.localeCompare(b.name);
             });
        },
        getPerson: (state) => (id) => {
            return state.people.find(person => person._id === id);
        },
        getTimeline(state) {
            return state.timeline;
        }
    },
    // for changing/updating/creating data
    mutations: {
        addPerson(state, person){
            state.people.push(person);
        },
        setPeople(state, people){
            state.people = people;
        },
        setTimeline(state,timeline) {
            state.timeline = timeline;
        },

        deletePerson(state, personId) {
            state.people = state.people.filter(person => person._id !== personId);
        },
        deletePersonsPosts(state, personId) {
            state.timeline = state.timeline.filter(post => post.person_id !== personId);
        },

    },
    actions: {
        loadPeople(context){
            axios.get(process.env.VUE_APP_ROOT_API+'/people', { 
                headers: { Authorization: userService.getProfile().token }
            })
                .then(response => {
                    context.commit('setPeople', response.data);
                });
        },
        loadTimeline(context, personId){
            var postsApiEndpoint = '';
            if (personId){
                postsApiEndpoint = process.env.VUE_APP_ROOT_API+'/person-posts?id='+personId;
            }
            else{
                postsApiEndpoint = process.env.VUE_APP_ROOT_API+'/posts';
            }

            axios.get(postsApiEndpoint, 
                    { 
                        headers: { Authorization: userService.getProfile().token }
                    }
                )
                .then(response => {
                    context.commit('setTimeline', response.data);
                });
        },
        addPerson(context, newPerson){
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.post(process.env.VUE_APP_ROOT_API+'/addperson', {
                    name: newPerson.name,
                    username: newPerson.username,
                    socialMedia: newPerson.socialMedia
                }, { 
                    headers: { Authorization: userService.getProfile().token }
                }).then(response => {
                    // http success, call the mutator and change something in state
                    context.commit('addPerson', response.data);
                    resolve(response.data);  // Let the calling function know that http is done. You may send some data back
                
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            });
        },
        deletePerson(context, personId){
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.delete(process.env.VUE_APP_ROOT_API+'/person?id='+personId, 
                { 
                    headers: { Authorization: userService.getProfile().token }
                }).then(function() {
                    // http success, call the mutator and change something in state
                    context.commit('deletePerson', personId);
                    resolve();  // Let the calling function know that http is done. You may send some data back
                
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            });
        },

        deletePersonsPosts(context, personId){
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                axios.delete(process.env.VUE_APP_ROOT_API+'/person-posts?id='+personId, 
                { 
                    headers: { Authorization: userService.getProfile().token }
                }).then(function() {
                    // http success, call the mutator and change something in state
                    context.commit('deletePersonsPosts', personId);
                    resolve();  // Let the calling function know that http is done. You may send some data back
                
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            });
        }
    }
});