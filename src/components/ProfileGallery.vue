<template>
<div>


  <div>
    <section class="image-gallery">
      <div class="image box" v-for="profile in profiles">
        <h4><u>Player: {{profile.playerName}}</u></h4> <br>

        <h4><u>Character Info:</u> <br> </h4>
        <p> Name: {{profile.charName}} <br>
        Age: {{profile.age}} <br>
        Gender: {{profile.gender}} <br>
        Class: {{profile.charClass}} <br><br> </p>

        <h4><u>Core Attributes</u> <br> </h4>
        <p> Heart: {{profile.heart}} <br>
        Might: {{profile.might}} <br>
        Mind: {{profile.mind}} <br>
        Strength: {{profile.strength}} <br>
        Faith: {{profile.faith}} <br> </p>
      </div>
    </section>
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
  margin: 0 0 0em;
  display: inline-block;
  width: 100%;
}

h4 {
//text-align: center;
}

.image img {
  max-width: 600px;
  max-height: 600px;
  image-orientation: from-image;
}

/* Masonry */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

h2 {
  line-height: 1.2;
}


.image-gallery {
  column-gap: 4em;
}

.box {
	background-color:#f8f9fa;
	border-style: inset;
	border-color: #42b98d;
	//margin: 300px;
	width: 75px;
	padding: 5px;
}

.image {
  margin: 0 0 8em;
  margin-left: 0px;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
  border-style: solid;
  border-color: black;
}

img {
  width: 75px;
}


.gender {
  width: 30px;
  height: 30px;
}

#title {
  /* DOTTED LINE FOR THE INDEX.HTML */
  border-style: groove;
  border-color: black;
  border-radius: 5px;
  width: auto;
}


/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>
