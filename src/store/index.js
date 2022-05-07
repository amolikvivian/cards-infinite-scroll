import { createStore } from "vuex";
import { getAllData, getDataByOwner, getDataByStatus } from "@/services/api";

export default createStore({
  state: {
    owner_id: 1,
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
    SET_BLOCKED_DATA(state, data) {
      state.blocked_data = data;
    },
  },
  actions: {
    async getData({ commit }) {
      const res = await getAllData();
      commit("SET_DATA", res);
    },
    async getOwnerData({ commit }, owner_id) {
      const res = await getDataByOwner(owner_id);
      commit("SET_OWNER_DATA", res);
    },
    async getBlockedData({ commit }) {
      const res = await getDataByStatus("blocked");
      commit("SET_BLOCKED_DATA", res);
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
    blockedData(state) {
      return state.blocked_data;
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
    currentID(state) {
      return state.owner_id;
    },
  },
});
