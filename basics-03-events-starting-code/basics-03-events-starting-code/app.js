const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },    
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