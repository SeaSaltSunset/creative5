<template>
<div class="home content">
  <profile-gallery :profiles="profiles" />
</div>
</template>

<script>
// @ is an alias to /src
import ProfileGallery from '@/components/ProfileGallery.vue'

export default {
  name: 'home',
  components: {
    ProfileGallery
  },
  computed: {
    profiles() {
      return this.$store.state.profiles;
    }
  },
  async created() {
    await this.$store.dispatch("getAllProfiles");
  },
}
</script>
