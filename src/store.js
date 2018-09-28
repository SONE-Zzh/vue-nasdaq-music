import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import networkApi from "./Util/netwoek-api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bannerImgsrc: [],
    personalized: []
  },
  mutations: {
    setBannerImgsrc(state, payload) {
      let ImgSrc = [];
      payload.data.banners.forEach(ele => {
        ImgSrc.push(ele);
      });
      // ImgSrc.push(ImgSrc[0]);
      // ImgSrc.unshift(ImgSrc[ImgSrc.length - 1]);
      state.bannerImgsrc = ImgSrc;
    },
    setPersonalized(state, payload) {
      let songList = [];
      payload.data.result.forEach(ele => {
        songList.push(ele);
      });
      state.personalized = songList;
    }
  },
  actions: {
    getBannerImgsrc({ commit }) {
      axios
        .get(networkApi.banner)
        .then(res => {
          commit("setBannerImgsrc", res);
        })
        .catch(err => {
          throw err;
        });
    },
    getPersonalized({ commit }) {
      axios
        .get(networkApi.personalized)
        .then(res => {
          commit("setPersonalized", res);
        })
        .catch(err => {
          throw err;
        });
    }
  }
});
