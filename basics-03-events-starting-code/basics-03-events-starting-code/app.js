const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(event) {
      this.counter++;
      console.log(this.counter, event);  
    },
    remove(event) {
      this.counter--;
      console.log(this.counter, event);
    },
  },
});

app.mount('#events');