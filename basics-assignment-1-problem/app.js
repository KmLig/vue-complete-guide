const app = Vue.createApp({
    data() {
        return {
            name: 'Km',
            age: new Date().getFullYear() - 1992,
            ageIn5Years: this.age + 5,
            favoriteNumber: Math.random().toFixed(2),
            imageUrl: 'https://images.pexels.com/photos/34714639/pexels-photo-34714639.jpeg'
        }
    },

    methods: {
        getRandomNumber() {
            return Math.random().toFixed(2);
        }
    }
}).mount('#assignment');