import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
        }
    },
    actions: {
        loadPeople(context){
            axios.get('http://localhost:3000/people')
                .then(response => {
                    context.commit('setPeople', response.data);
                });
        },
        loadTimeline(context, personId){
            var postsApiEndpoint = '';
            if (personId){
                postsApiEndpoint = 'http://localhost:3000/person-posts?id='+personId;
            }
            else{
                postsApiEndpoint = 'http://localhost:3000/posts';
            }

            axios.get(postsApiEndpoint)
                .then(response => {
                    context.commit('setTimeline', response.data);
                });
        },
        addPerson(context, newPerson){
            axios.post('http://localhost:3000/addperson', {
                name: newPerson.name,
                username: newPerson.username,
                socialMedia: newPerson.socialMedia
            }).then(response => {
                context.commit('addPerson', response.data);
            });
        }
    }
});