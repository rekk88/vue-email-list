var app = new Vue({
    el:"#app",

    data: {
        indirizzo: "",
        indirizzi : [],
        // p: "",
        poks: [],
    },
    mounted() {
        // this.test()
        // axios 
        //     .get('https://flynn.boolean.careers/exercises/api/random/mail')
        //     .then(email => {
        //         this.indirizzo = email.data.response;
        //     });
    },
    methods: {
        test(){
            console.log("sei un grande");
        },
        getEmail(){

            // axios 
            //     .get('https://flynn.boolean.careers/exercises/api/random/mail')
            //     .then(email => {
            //         this.indirizzo = email.data.response;
            //     });
            
            // console.log(this.indirizzo);
            for(let i=0 ; i < 10 ; i++){
                // console.log(this.indirizzi);
                 axios 
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(email => {
                    this.indirizzi.push(email.data.response);
                    // this.indirizzo = email.data.response;
                    // this.indirizzi.push(this.indirizzo);
                });
               
                // this.indirizzi.push(this.indirizzo)
            }
            console.log(this.indirizzi);
        },
        getPokemon(){
            console.log("sei un grande");
            axios 
            .get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(pokemon => {

                let pokemons = pokemon.data.results; //array con nome e url
                console.log(pokemons);
                console.log(this.poks);
                pokemons.forEach(async(element,index) => { //async consente di creare un blocco di codice asyncrono
                    await axios // await impedisce ad axios di fare un altro get finchè non arriva la risposta di quello precedente
                    .get(element.url)
                    .then(p =>{
                        console.log(p.data.sprites.front_default);
                        // img.push(p.data.sprites.front_default);
                        // console.log(img);
                        // console.log(element.name);
                        
                        app.poks.push({ //carico nell'array poks un oggetto con nome e percorso immagine
                            nome : element.name,
                            immagine : p.data.sprites.front_default,
                        })
                    })


                });
                // axios
                //     .get(pokemons[0].url)
                //     .then(info =>{
                //         console.log(info.data);
                //     })
                // pokemons.forEach(element => {
                //     // console.log(element);
                //     // console.log(this.poks);
                //     this.poks.push(element)
                // });
                // console.log(this.poks);



           
                //----------------------------------------------------------------
                // let d = pokemon.data;
                // console.log(d);
                // let img = d.sprites.front_default; //estraggo l'immagine del pokemon
                // console.log(img);
                // this.pok.id= 1;
                // this.pok.nome = d.name;
                // this.pok.immagine = img;
                // console.log(this.pok);
                // this.indirizzo = email.data.response;
                // this.indirizzi.push(this.indirizzo);
            });
            console.log(app.poks);
        }
    },
});

