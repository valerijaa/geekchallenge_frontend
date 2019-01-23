<template>
  <div id="app">
    <div class="container">
      <div class="timeline"> 

        <div class="post" v-bind:key="post.id" v-for="post in timeline">
          <div class="info">
          <div class="prof"> 
            <img class="pic" v-bind:src="post.photo"/>
             <div class="user">
               <h1>{{post.display_name}}</h1>
               <span>{{post.username}}</span>
          </div>
  
          </div>
          <img class="icon" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png">
          </div>

          <p>{{post.text}}</p>
       
              <div class="mood-properties"> 

            <div class="feature"> 
              <img src="https://vignette.wikia.nocookie.net/csydes-test/images/a/ac/Discord_Emoticon_Happy.png/revision/latest?cb=20180601003844">
              <h3> 90% happy</h3>
            </div>

             <div class="feature"> 
              <img src="http://assets.stickpng.com/thumbs/586294c83796e30ac4468735.png">
              <h3> 3% happy</h3>
            </div>

             <div class="feature"> 
              <img src="https://imagejournal.org/wp-content/uploads/2017/03/1f60b.png">
              <h3> 7% happy</h3>
            </div>
          </div>
        <!-- <span class="date">{{post.created_at}}</span> -->

        <div class="expand-wrapper">
          <input id="expand" class="toggle" type="checkbox">
          <label for="expand" class="label-toggle">More Info</label>
          <div class="expand-content">
            <div class="inner-content">
              <div class="components"> 
                <div class="language">
                  <h2>Emotional tone</h2>
                  <ul> 
                    <li> <span style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Joy </li>
                    <li> <span style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Happiness</li>
                    <li> <span style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Satisfaction</li>
                    </ul>
                </div>
                <div class="emotional">
                  <h2>Language tone</h2>
                    <ul> 
                    <li> <span  style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Joy </li>
                    <li> <span  style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Happiness</li>
                    <li> <span  style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Satisfaction</li>
                    </ul>
                </div>
                <div class="social">
                  <h2>Social tone</h2>
                    <ul> 
                    <li> <span  style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Joy </li>
                    <li> <span  style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Happiness</li>
                    <li> <span  style="color:goldenrod;font-weight:bold;margin-right: 10px;">90% </span> Satisfaction</li>
                    </ul>
                </div>

               
              </div>

               <div class="statistics"> 
                  <h4> Statistics of the mood for the last week </h4>
                   <img src="https://d3krtd5frfbrx5.cloudfront.net/site/screenshots/english/queryapp_linechart.png">

                </div>


            </div>
          </div>
        </div>
        </div>  




      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
   computed: {
        timeline() {
            return this.$store.getters.getDashboardTimeline;
        }
    },

  created() {
    this.$store.dispatch('loadTimeline');
  },
  methods: {
  }
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.timeline {
  display:flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
  margin-top: 5%;
}
.prof {
  display:flex;
  align-items: center;
  width: 400px;
  margin-left: 5%;

}
.info {
  display:flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3%;
  justify-content: space-between;
}

.prof .pic {
  border-radius: 50%;
  background-image: linear-gradient(to right top, #e0e03a, #e6c923, #eab211, #ec9b0b, #eb8312);   
  width: 65px;
  height: 65px;
}

.prof .user {
  margin-left: 6%;
}
.prof span {
  font-size: 16px;
  color: grey;
  font-weight: 500;
}

.prof h1 {
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
}
.info img.icon {
  width: 50px;
  height: 50px;
  margin-right: 4%;
}
.post {
  flex: 1;
  width: 75%;
  border: 1px solid white;
  border-radius: 13px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);   
  margin-bottom: 5%;
}
/* .post span.date {
  float: right;
  margin-right: 3%;
  margin-bottom: 2%;
  color: grey;
  font-weight: 300;
  font-style: italic;
  font-size: 16px;
} */
.post p {
  font-size: 20px;
  width: 80%;
  margin: 2% 5%;

}

.mood-properties {
  display: flex;
  justify-content: center;
  align-self: center;
}

.feature {
  margin-right: 70px;
  margin-left: 70px;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
.feature img {
  width: 35px;
  height:35px;
}

.feature h3 {
  font-size: 15px;
  text-align: center;
  margin-top: 0;
}

/* style for expand element */
input[type='checkbox'] {
  display: none;
}

.label-toggle {
  display: block;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
 
  cursor: pointer;
  border-radius: 7px;
  -webkit-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  color:#6f6f6f;
}


.label-toggle:hover {
  color: black;
}

.label-toggle::before {
  content: ' ';
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);
  transition: transform .2s ease-out;
}

.expand-content .inner-content {
  background: rgb(247, 247, 247);;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  padding: .5rem 1rem;
}

.expand-content {
  max-height: 0px;
  overflow: hidden;

  transition: max-height .25s ease-in-out;
}

.toggle:checked + .label-toggle + .expand-content {
  max-height: 700px;
}

.toggle:checked + .label-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.toggle:checked + .label-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.components {
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
}
.components .social, .language, .emotional {
  width: 250px;
  height: 200px;
  margin: 20px;
  border: 1px solid white;
  border-radius: 13px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}
.components .social, .language, .emotional, h2 {
  text-align: center;
  font-size: 22px;
  color: black;
  padding-top: 6px;
}

.components .social, .language, .emotional, ul {
    text-align: left;
    list-style-type: none;
    color: grey;
    font-size: 18px;

}

.components .social, .language, .emotional, ul, li {
  padding-bottom: 6px;  
}

.components .statistics, h4 {
  font-size: 22px;
  text-align: center;
  color: black;
}
.statistics img {
  width: 100%;
}

</style>
