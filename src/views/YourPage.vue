<template>
<div>
  <div v-if="user">
    <div class="header">
      <div>
        <h1>{{user.name}}</h1>
      </div>
      <div>
        <p>
          <a @click="toggleUpload"><i class="far fa-image"></i></a>
          <a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
        </p>
      </div>
    </div>
    <escape-event @escape="escape"></escape-event>
    <uploader :show="show" @escape="escape" @uploadFinished="uploadFinished" />
    <profile-gallery :profiles="profiles" />
  </div>
  <div v-else>
    <p>If you would like to upload photos, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import EscapeEvent from '@/components/EscapeEvent.vue'
import Uploader from '@/components/Uploader.vue'
import ProfileGallery from '@/components/ProfileGallery.vue'

export default {
  name: 'yourpage',

  components: {
    EscapeEvent,
    Uploader,
    ProfileGallery,
  },

  data() {
    return {
      show: false,
    }
  },



  computed: {
    user() {
      return this.$store.state.user;
    },
    profiles() {
      return this.$store.state.profiles;
    },
  },

  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMyProfiles");
  },

  methods: {

    async uploadFinished() {
      this.show = false;
      try {
        this.error = await this.$store.dispatch("getMyProfiles");
      } catch (error) {
        console.log(error);
      }
    },

    escape() {
      this.show = false;
    },

    toggleUpload() {
      this.show = true;
    },

    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
  },


}
</script>


<style scoped>
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: #222;
  font-size: 2em;
}

.header svg {
  margin-top: 12px;
}
</style>
