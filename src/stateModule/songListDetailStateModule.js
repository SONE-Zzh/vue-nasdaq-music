import axios from "axios";
import networkApi from "../Util/netwoek-api.js";

export default {
  namespaced: true,
  state: {
    songListState: []
  },
  mutations: {
    setSongState(state, payload) {
      state.songListState = payload.playlist;
    }
  },
  actions: {
    getSongState({ commit }, payload) {
      axios
        .get(networkApi.playlistDetail + "?id=" + payload.id)
        .then(res => {
          // console.log(res.data);
          commit("setSongState", res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
