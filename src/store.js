import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    profiles: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setProfiles(state, profiles) {
      state.profiles = profiles;
    }
  },
  actions: {

    async upload(context, data) { //UPLOAD NEW PROFILES
      try {
        await axios.post('/api/profiles', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },


    async getMyProfiles(context) {    //GET ALL PROFILES
      try {
        let response = await axios.get("/api/profiles");
        context.commit('setProfiles', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },

    async register(context, data) { //register an account
      try {
        console.log("Made it to the state");
        let response = await axios.post("/api/users/register", data);
        console.log("Made it to the state");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },

    async login(context, data) { //login to a pre-existing account
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },

    async logout(context) { //log out of an account
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },

    async getUser(context) { //get current user. check if user is logged on
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },

  }
})
