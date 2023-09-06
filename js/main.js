const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      selectedUser: 0,
    };
  },

  methods: {
    newSelectedUser(index) {
      this.selectedUser = index;
    },
  },
}).mount("#app");
