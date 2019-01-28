<template>
  <div class="container">
    <div class="timeline">
      <div v-if="timeline.length === 0">
        You do not have any posts in timeline..
      </div>

      <div class="post" v-bind:key="post.id" v-for="post in timeline">
        <div class="info">
          <div class="prof">
            <img class="pic" v-bind:src="post.photo">
            <div class="user">
              <div class="username">
                <h1>
                  {{post.display_name}}
                  <span class="username">{{post.username}}</span>
                </h1>
              </div>
              <span class="date">{{ new Date(post.created_at) | moment("from", "now") }}</span>
            </div>
          </div>
          <img
            class="icon"
            src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
          >
        </div>

        <p>{{post.text}}</p>

        <div class="mood-properties">
          <div class="feature">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/grinning-face-with-one-large-and-one-small-eye_1f92a.png"
            >
            <h3>{{getPercentage(post.analysis_result.emotion.highest.score)}} % {{post.analysis_result.emotion.highest.tone_name}}</h3>
          </div>

          <div class="feature">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/face-with-uneven-eyes-and-wavy-mouth_1f974.png"
            >
            <h3>{{getPercentage(post.analysis_result.language.highest.score)}} % {{post.analysis_result.language.highest.tone_name}}</h3>
          </div>

          <div class="feature">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/155/hugging-face_1f917.png"
            >
            <h3>{{getPercentage(post.analysis_result.social.highest.score)}} % {{post.analysis_result.social.highest.tone_name}}</h3>
          </div>
        </div>

        <div class="expand-wrapper" v-bind:class="{'expanded':isCardExpanded(post._id)}">
          <label class="label-toggle" v-on:click="toggleVisibility(post._id)">More Info</label>
          <div class="expand-content">
            <div class="inner-content">
              <div class="components">
                <div class="language">
                  <h2>Emotional tone</h2>
                  <ul>
                    <li
                      v-bind:key="toneResult.tone_id"
                      v-for="toneResult in post.analysis_result.emotion.scores"
                    >
                      <span
                        style="color:goldenrod;font-weight:bold;margin-right: 10px;"
                      >{{getPercentage(toneResult.score)}} %</span>
                      {{toneResult.tone_name}}
                    </li>
                  </ul>
                </div>
                <div class="emotional">
                  <h2>Language tone</h2>
                  <ul>
                    <li
                      v-bind:key="toneResult.tone_id"
                      v-for="toneResult in post.analysis_result.language.scores"
                    >
                      <span
                        style="color:goldenrod;font-weight:bold;margin-right: 10px;"
                      >{{getPercentage(toneResult.score)}} %</span>
                      {{toneResult.tone_name}}
                    </li>
                  </ul>
                </div>
                <div class="social">
                  <h2>Social tone</h2>
                  <ul>
                    <li
                      v-bind:key="toneResult.tone_id"
                      v-for="toneResult in post.analysis_result.social.scores"
                    >
                      <span
                        style="color:goldenrod;font-weight:bold;margin-right: 10px;"
                      >{{getPercentage(toneResult.score)}} %</span>
                      <template v-if="toneResult.tone_id === 'conscientiousness_big5'">Scrupulosity</template>
                      <template v-else>{{toneResult.tone_name}}</template>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 
               <div class="statistics"> 
                  <h4> Statistics of the mood for the last week </h4>
                   <img src="https://d3krtd5frfbrx5.cloudfront.net/site/screenshots/english/queryapp_linechart.png">

              </div>-->
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
  props: ["personId"],
  data() {
    return {
      expandedPostIds: []
    };
  },
  computed: {
    timeline() {
      return this.$store.getters.getTimeline;
    }
  },
  watch: {
    personId: function(to) {
      this.$store.commit("setTimeline", []);
      this.$store.dispatch("loadTimeline", to);
    }
  },
  created() {
    /* eslint-disable no-console */
    //  console.log('...');
    /* eslint-enable no-console */
    this.$store.dispatch("loadTimeline", this.personId);
  },
  methods: {
    isCardExpanded(postId) {
      if (this.expandedPostIds.indexOf(postId) > -1) {
        return true;
      } else {
        return false;
      }
    },
    toggleVisibility(postId) {
      if (this.isCardExpanded(postId)) {
        this.expandedPostIds = this.expandedPostIds.filter(
          expandedPostId => expandedPostId !== postId
        );
      } else {
        this.expandedPostIds.push(postId);
      }
    },
    getPercentage(score) {
      return Math.floor(score * 100);
    }
  }
};
</script>

<style scoped>
.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
  margin-top: 5%;
}

.prof {
  display: flex;
  align-items: center;
  width: 800px;
  margin-left: 5%;
}
.info {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3%;
  justify-content: space-between;
}

.prof .pic {
  border-radius: 50%;
  background-image: linear-gradient(
    to right top,
    #e0e03a,
    #e6c923,
    #eab211,
    #ec9b0b,
    #eb8312
  );
  width: 65px;
  height: 65px;
}

.prof .user {
  margin-left: 20px;
}
.prof span.username {
  font-size: 18px;
  color: grey;
  font-weight: 500;
  margin-left: 10px;
}

.prof h1 {
  font-size: 22px;
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
  width: 45px;
  height: 45px;
}

.feature h3 {
  font-size: 15px;
  text-align: center;
  margin-top: 0;
}

/* style for expand element */

.label-toggle {
  display: block;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;

  cursor: pointer;
  border-radius: 7px;
  -webkit-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  color: #6f6f6f;
}

.label-toggle:hover {
  color: black;
}

.label-toggle::before {
  content: " ";
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: 0.7rem;
  transform: translateY(-2px);
  transition: transform 0.2s ease-out;
}

.expand-content .inner-content {
  background: rgb(247, 247, 247);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  padding: 0.5rem 1rem;
}

.expand-content {
  max-height: 0px;
  overflow: hidden;

  transition: max-height 0.25s ease-in-out;
}

.expand-wrapper.expanded .expand-content {
  max-height: 700px;
}

.expand-wrapper.expanded .label-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.expand-wrapper.expanded .label-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.components {
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
}
.components .social,
.language,
.emotional {
  width: 250px;

  margin: 20px;
  border: 1px solid white;
  border-radius: 13px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  flex-direction: column;
}
.components .social,
.language,
.emotional,
h2 {
  text-align: center;
  font-size: 22px;
  color: black;
  padding-top: 6px;
  margin-bottom: 0;
}

.components .social,
.language,
.emotional,
ul {
  text-align: left;
  list-style-type: none;
  color: grey;
  font-size: 18px;
  padding-left: 12px;
}

.components .social,
.language,
.emotional,
ul,
li {
  padding-bottom: 6px;
}

.components .statistics,
h4 {
  font-size: 22px;
  text-align: center;
  color: black;
}
.statistics img {
  width: 100%;
}
</style>
