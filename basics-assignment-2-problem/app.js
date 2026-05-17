const app = Vue.createApp({
    data() {
        return{
            userInput: '',
            confirmedInput: '',
        }
    },
    methods: {
        showAlert() {
            alert('Hello, Vue!');
        },
        registerInput(event) {
            this.userInput = event.target.value;
        },
        registerInputEnter(event) {
            if (event.key === 'Enter') {
                this.confirmedInput = event.target.value;
            }
        }
    }
}).mount('#assignment');