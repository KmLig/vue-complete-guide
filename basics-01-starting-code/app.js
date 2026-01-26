const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org",
      isFirstButtonDisabled: true,
      isSecondButtonDisabled: false,
      objectOfAttributes: {
        id: "user-goal-details",
        class: "wrapper",
        style: "border: 2px solid blue; padding: 10px;",
      },
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
