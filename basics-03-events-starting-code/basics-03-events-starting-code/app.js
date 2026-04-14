const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num, event) {
      this.counter += num;
      console.log(this.counter, event);  
    },
    remove(num, event) {
      this.counter -= num;
      console.log(this.counter, event);
    },
  },
});

app.mount('#events');