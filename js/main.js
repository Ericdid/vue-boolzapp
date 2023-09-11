const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      selectedUser: 0,
      searchUser: "",

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
      this.newMessage.message = "";
      setTimeout(() => {
        let answer = {
          date: "empty",
          message: "ok",
          status: "received",
        };
        this.contacts[this.selectedUser].messages.push(answer);
      }, 1000);
    },

    // filtro ricerca contatti
    filter() {
      this.contacts.forEach((user) => {
        let lowerCaseUser = user.name.toLowerCase();
        if (lowerCaseUser.includes(this.searchUser.toLowerCase())) {
          user.visible = true;
        } else {
          user.visible = false;
        }
      });
    },
  },
}).mount("#app");
