<template>
<transition v-if="show" name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h1 class="modal-title">Create a Character</h1>
        </div>
        <div class="modal-body">
          <p v-if="error" class="error">{{error}}</p>
          <form @submit.prevent="upload">
            <div class>
              <p> Player Name: </p> <input v-model="playerName" placeholder="Your Name">
            </div>
            <p></p> <br>
            <div class="headBox">
              <h3><u>Character Info:</u> </h3>
              <p> Character Name:</p> <input v-model="charName" placeholder="Their Name">

              <p></p>
              <p> Age:</p> <input v-model="age" size="5" type="number" placeholder="Age">
              <p></p>
              <p> Class:</p> <input v-model="charClass" placeholder="Character Class">
            </div>
            <p></p> <br>
            <div class>
              <h3><u>Core Attributes:</u></h3>
              <p> Heart:</p>
              <input size="5" v-model="heart" type="number" placeholder="Heart Score">
              <p></p>
              <p> Might:</p>
              <input size="5" v-model="might" type="number" placeholder="Might Score">
              <p></p>
              <p> Mind:</p>
              <input size="5" v-model="mind" type="number" placeholder="Mind Score">
              <p></p>
              <p> Strength:</p>

              <input class="intInput" v-model="strength" type="number" placeholder="Strength Score">
              <p>Faith Score: {{faith}}</p>
              <button type="button" @click="close" class="pure-button">Close</button>
              <button type="submit" class="pure-button pure-button-secondary">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>



<script>
export default {
  name: 'Uploader',
  props: {
    show: Boolean,
  },
  data() {
    return {
      //  addItem: null,
      //items: [],
      //       findName: "",
      //   findItem: null,
      playerName: "Leon",
      charName: "Chris",
      charClass: "hero",
      age: 2,
      male: true,
      gender: "male",

      heart: 0,
      might: 0,
      mind: 0,
      strength: 0,
      //  faith: 0,
      error: '',
    }
  },
  computed: {
    faith() {
      return (parseInt(this.heart) + parseInt(this.might));
    },
  },
  methods: {
    //        fileChanged(event) {
    //    this.file = event.target.files[0]
    //  },
    async upload() {
      try {
        this.error = await this.$store.dispatch("upload", {

          //title: this.title,
          playerName: this.playerName,
          charName: this.charName,
          charClass: this.charClass,
          age: this.age,

          heart: this.heart,
          might: this.might,
          mind: this.mind,
          strength: this.strength,
          faith: this.faith,
          male: this.male,
          gender: this.gender,
          //path: r1.data.path

        });
        console.log("UPLOADED");
        this.$emit('uploadFinished');
        //this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },



    close() {
      console.log("closing time");
      this.$emit('escape');
    },
  },
}
</script>




<style scoped>
input {
  width: 100%;
}

textarea {
  width: 100%;
}

.pure-button-secondary {
  float: right;
}
</style>
