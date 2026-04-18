const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Form submitted');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },    
    add(event, num) {
      this.counter += num;
      console.log(this.counter, event);  
    },
    remove(event, num) {
      this.counter -= num;
      console.log(this.counter, event);
    },
  },
});

app.mount('#events');