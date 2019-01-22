import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // our state, our data
    state: {
        people: [ 
            {
                id: 10,
                name: 'Elgarssss',
                social: 'twitter'
            },
            {
                id: 11,
                name: 'Valerijaaa',
                social: 'twitter'
            }
        ],
        timeline: [
            {
                id: 1,
                text: 'This is a tweet of the person. It can be long, it can be short. but so far there is just a random text.',
                date: '22/01/2019 13:30',
                socialNetwork: 'twitter',
                personName: 'Elgars Logins'
            },
            {
                id: 2,
                text: 'This is another tweet of the person. It can be long, it can be short. but so far there is just a random text.',
                date: '22/01/2019 10:30',
                socialNetwork: 'twitter',
                personName: 'John Logins'
            },

            {
                id: 3,
                text: 'This is another tweet of the person. It can be long, it can be short. but so far there is just a random text.',
                date: '22/01/2019 10:30',
                socialNetwork: 'twitter',
                personName: 'John Logins'
            }
        ]
    },
    // for reading or returning or filtering data
    getters: {
        getPeople(state){
            return state.people;
        },
        getDashboardTimeline(state){
            return state.timeline;
        }
    },
    // for changing/updating/creating data
    mutations: {
        addPerson(state, person){
            // TODO: POST TO our backend API
            state.people.push(person);
        }
            // axios.post('http://localhost:3000/addperson', {
      //   name: newPerson.name,
      //   username: newPerson.username,
      //   socialMedia: newPerson.socialMedia
      // })
      // .then(res => this.people= [...this.people, res.data]);
    }
});