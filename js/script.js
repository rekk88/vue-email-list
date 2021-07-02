var app = new Vue({
    el:"#app",

    data: {
        indirizzo: ""
    },
    mounted() {
        // this.test()
        axios 
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(email => {
                this.indirizzo = email.data.response;
            });
    },
    methods: {
        test(){
            console.log("sei un grande");
        },
        getEmail(){
            axios 
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(email => {
                    this.indirizzo = email.data.response;
                });
            
            console.log(this.indirizzo);
        }
    },
});

