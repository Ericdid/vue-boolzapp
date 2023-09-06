const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      selectedUser: 7,
    };
  },
}).mount("#app");
