var app = new Vue({
    el:"#app",

    data: {
        indirizzo: "",
        indirizzi : []
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
            for(let i=0 ; i < 10 ; i++){
                // console.log(this.indirizzi);
                axios 
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(email => {
                    this.indirizzo = email.data.response;
                });
                if(!this.indirizzi.includes(this.indirizzo)){
                    this.indirizzi.push(this.indirizzo)
                }
            }
            console.log(this.indirizzi);
        }
    },
});

