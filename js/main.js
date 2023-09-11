const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      selectedUser: 0,

      newMessage: {
        date: "empty",
        message: "",
        status: "sent",
      },
    };
  },

  methods: {
    newSelectedUser(index) {
      this.selectedUser = index;
    },

    sendMessage() {
      staticMessage = { ...this.newMessage };
      this.contacts[this.selectedUser].messages.push(staticMessage);
    },
  },
}).mount("#app");
