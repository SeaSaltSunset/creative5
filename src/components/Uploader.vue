<template>
<transition v-if="show" name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h1 class="modal-title">Upload</h1>
        </div>
        <div class="modal-body">
          <p v-if="error" class="error">{{error}}</p>
          <form @submit.prevent="upload">
            <input v-model="title" placeholder="playerName">
            <p></p>
            <textarea v-model="charName" placeholder="Description"></textarea>
            <p></p>
            <!--  <input type="file" name="profile" @change="fileChanged"> -->
            <p></p>
            <button type="button" @click="close" class="pure-button">Close</button>
            <button type="submit" class="pure-button pure-button-secondary">Upload</button>
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
   faith: 0,
    }
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
        //this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },



    close() {
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
  height: 100px
}

.pure-button-secondary {
  float: right;
}
</style>
