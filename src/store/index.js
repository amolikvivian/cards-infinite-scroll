import { createStore } from "vuex";

export default createStore({
  state: {
    owner_id: 1,
    data: {
      list: [
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 1,
          owner_name: "Vikas",
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 Feb, 2022",
          limit: 100,
          status: "active",
        },
        {
          name: "Quickbooks",
          budget_name: "Software subscription",
          owner_id: 2,
          owner_name: "Rajesh",
          spent: {
            value: 0,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 feb",
          limit: 10,
          status: "active",
        },
        {
          name: "Motion",
          budget_name: "Software subscription",
          owner_id: 1,
          owner_name: "Vikas",
          spent: {
            value: 0,
            currency: "SGD",
          },
          available_to_spend: {
            value: 15,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 feb",
          limit: 5,
          status: "active",
        },
      ],
      page: 1,
      per_page: 10,
      total: 100,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    data(state) {
      return state.data.list;
    },
    cardholderNames(state) {
      return [
        ...new Set(
          state.data.list.map((ele) => {
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
