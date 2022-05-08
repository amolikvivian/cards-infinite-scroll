import { createStore } from "vuex";
export default createStore({
  state: {
    owner_id: 2,
    all: [],
    owner_data: [],
    blocked_data: [],
  },
  mutations: {
    SET_DATA(state, data) {
      state.all = data;
    },
    SET_OWNER_DATA(state, data) {
      state.owner_data = data;
    },
  },
  actions: {
    async getData({ commit }) {
      const res = await fetch(
        `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data`
      );
      commit("SET_DATA", await res.json());
    },
    async getOwnerData({ commit }, owner_id) {
      const res = await fetch(
        `https://my-json-server.typicode.com/amolikvivian/cards-infinite-scroll/data?owner_id=${owner_id}`
      );
      commit("SET_OWNER_DATA", await res.json());
    },
  },
  modules: {},
  getters: {
    all(state) {
      return state.all;
    },
    ownerData(state) {
      return state.owner_data;
    },
    cardholderNames(state) {
      return [
        ...new Set(
          state.all?.map((ele) => {
            return ele.owner_name;
          })
        ),
      ];
    },
    currentId(state) {
      return state.owner_id;
    },
  },
});
