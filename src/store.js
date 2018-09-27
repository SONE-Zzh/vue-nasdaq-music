import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import networkApi from "./Util/netwoek-api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bannerImgsrc: []
  },
  mutations: {
    setBannerImgsrc(state, payload) {
      let ImgSrc = [];
      payload.data.banners.forEach(ele => {
        ImgSrc.push(ele);
      });
      state.bannerImgsrc = ImgSrc;
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
    }
  }
});
