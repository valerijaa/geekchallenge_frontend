<template>

<div>
    <div class="container">
        <template v-if="submitStatus !== 'PREPARING_TIMELINE'">
            <form @submit.prevent="submit">      
                <h1>Add new person</h1>
                <p class="typo__p" v-if="submitStatus === 'OK'" style="color: green">Thanks for your submission!</p>
                <p class="typo__p" v-if="submitStatus === 'ERROR'" style="color: red">Please fill the form correctly.</p>
                <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
            
                <div class="form-group" :class="{'form-group--error': $v.name.$error }"> 
                    <label class="form__label" for="name">Name</label>
                    <input type="text" class="name form__input" v-model.trim="$v.name.$model"/>
                </div>

                <div class="error" v-if="!$v.name.required && submitStatus" style="color: red">Name is required</div>
                <div class="error" v-if="!$v.name.minLength && submitStatus" style="color: red">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            
                <div class="form-group" :class="{'form-group--error': $v.name.$error }"> 
                <label class="form__label" for="media">Choose social media</label>
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
                </div>

                <div class="error" v-if="!$v.username.required && submitStatus" style="color: red">Ths field is required</div>

                <div class="form-group" :class="{'form-group--error': $v.username.$error }"> 
                <label class="form__label" for="username">Username</label>
                    <input type="text"  class="username form__input" v-model.trim="$v.username.$model"/>
                </div>

                <div class="error" v-if="!$v.username.required && submitStatus" style="color: red">Username is required</div>
                <div class="error" v-if="!$v.username.minLength && submitStatus" style="color: red">Username must have at least {{$v.username.$params.minLength.min}} letters.</div>

                <input type="submit" :disabled="submitStatus === 'PENDING'" value="Add" class="btn">



            </form>
        </template>
        <template v-else>
           <div class="preparing-timeline">
                <h3>We are preparing timeline for <strong>{{name}}</strong></h3>
                <h4>It will take some time (approx. 5 seconds 😝), when done we will redirect you to his profile page</h4>
                <Loader />
            </div>
        </template>
    </div>

</div>
    
</template>




<script>
import { required, minLength } from 'vuelidate/lib/validators'
import axios from 'axios';
import { userService } from '../services/UserService'
import Loader from '../components/Loader'

export default {
    name: "AddPerson",
    components: {
        Loader
    },
    data() {
        return {
            name: '',
            socialNetwork: '',
            username: '',
            submitStatus: null
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(5)
        },
        socialNetwork: {
            required
        },
        username: {
            required,
            minLength: minLength(5)
        }
    },
    methods: {
        submit(e) {
            var self = this;
            e.preventDefault();
            /*   eslint-disable no-console */
            console.log('submit!');
            /* eslint-enable no-console */

            this.$v.$touch();
            if(this.$v.$invalid){
                this.submitStatus = 'ERROR';
            } 
            else {
                this.submitStatus = 'PENDING';

                const newPerson = {
                    name: this.name,
                    username: this.username,
                    socialMedia: this.socialNetwork
                }

                this.$store.dispatch('addPerson', newPerson)
                    .then(response => {
                        // set status as preparing timeline, to inform user
                        self.submitStatus = 'PREPARING_TIMELINE';

                        // ensure persons latests posts are loaded
                        axios.get(process.env.VUE_APP_ROOT_API+'/reload-persons-posts?id='+response._id, { 
                            headers: { Authorization: userService.getProfile().token }
                        })
                        .then(function() {
                            // 3 second timeout before redirecting
                            setTimeout(function(){
                                self.submitStatus = 'OK';
                                // reset form data to empty fields
                                self.name = '';
                                self.username = '';
                                self.socialNetwork = '';
                                // route to created persons details page
                                self.$router.push({ name: 'person', params: { id: response._id} })
                            }, 5000);
                        });
                    }, function() {
                    self.submitStatus = 'ERROR';
                });
            }
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

    .preparing-timeline{
        text-align: center;
    }
</style>

