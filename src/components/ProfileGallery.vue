<template>
<div>
  <div class="image" v-for="profile in profiles" v-bind:key="profile._id">
  <h2 id="title">Player: {{profile.playerName}} <br> <br><u>Character Info:</u> <br> Name: {{profile.charName}} <br>
				 Age: {{profile.age}} <br> Gender: {{profile.gender}} <br> Class: {{profile.charClass}} <br><br> <u>Core Attributes</u> <br> Heart: {{profile.heart}} <br> Might: {{profile.might}}
				<br> Mind: {{profile.mind}} <br> Strength: {{profile.strength}} <br> Faith: {{profile.faith}} <br>  </h2>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ProfileGallery',
  props: {
    profiles: Array
  },
  methods: {
   formatDate(date) {
     if (moment(date).diff(Date.now(), 'days') < 15)
       return moment(date).fromNow();
     else
       return moment(date).format('d MMMM YYYY');
   },
 },
}
</script>

<style scoped>
.photoTitle {
  margin: 0px;
  font-size: 1.2em;
}

.photoDate {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
}

p {
  margin: 0px;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  max-width: 600px;
  max-height: 600px;
  image-orientation: from-image;
}
</style>
