const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Master Vue and build amazing apps!";
      } else {
        return "Complete the course and get started with Vue!";
      }
    },
  },
});

app.mount("#user-goal");
