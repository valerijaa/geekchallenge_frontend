<template>
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
         <!-- <span class="date">{{post.created_at}}</span>  -->

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
</template>


<script>

export default {
    name: "Timeline",
    props:['personId'],
    computed: {
        timeline() {
            return this.$store.getters.getTimeline;
        }
    },
    watch: {
        'personId': function(to){
          this.$store.commit('setTimeline', []);
          this.$store.dispatch('loadTimeline', to);
        }
      },
    created() {
        /* eslint-disable no-console */
        //  console.log('...');
        /* eslint-enable no-console */
        this.$store.dispatch('loadTimeline', this.personId);
    }
}
</script>

<style scoped>

</style>
