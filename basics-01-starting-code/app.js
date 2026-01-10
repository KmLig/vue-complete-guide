const app = Vue.createApp({
  data: function () {
    return {
      goal: "Learn Vue.js!",
    };
  },
});

app.mount("#user-goal");
