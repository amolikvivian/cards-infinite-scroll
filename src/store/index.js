import { createStore } from "vuex";
import { PROD } from "@/services/devapi.js";

export default createStore({
  state: {
    owner_id: 2,
    names: [],
  },
  mutations: {
    SET_NAMES(state, data) {
      state.names = data;
    },
  },
  actions: {
    async getNames({ commit }) {
      let res = await fetch(PROD + `/owners`);
      res = await res.json();
      commit("SET_NAMES", res.data);
    },
  },
  modules: {},
  getters: {
    cardholderNames(state) {
      return state.names;
    },
    currentId(state) {
      return state.owner_id;
    },
  },
});
