const app = new Vue ({
    el: "#root",
    data: {

        images: 

        [
            "img/dragon-ball-super.jpg",
            "img/google-assistant-super-saiyan.webp",
            "img/foto-generiche-165263.jpg",
            "img/dragon-ball-z-goku-raggiunge-ssj3-cosplay-femminile-miyu-v3-533272-900x900.webp",
            "img/dragon-ball-super-5-motivi-rendere-super-saiyan-4-canonico-v3-460248.jpg"
        ],

        currentImg: 0,

        title: 
        
        [
            "Son Goku",
            "Goku Super Sayan",
            "Goku Super Sayan liv 2",
            "Goku Super Sayan liv 3",
            "Goku Super Sayan liv 4"
        ],

        currentTitle: 0,

        text: 

        [
            "Son Goku appartiene al popolo guerriero dei Saiyan ed era stato inviato sulla Terra con la missione di distruggerne gli abitanti e conquistare il pianeta",
            "Son Goku raggiunge questa potente trasformazione esplodendo di rabbia nello scontro con Freezer",
            "Non si sa esattamente quando Son Goku ha raggiunto questa trasformazione, ma è stato dopo la battaglia con Cell, quando si allenava nell'Aldilà",
            "Son Goku raggiunge questo stadio nell'Aldilà, in quanto li non si ha un corpo vero, quindi si può mettere tutta l'energia che si vuole",
            "Questo è il 4° livello di Super Saiyan di Son Goku. Questa trasformazione viene raggiunta da Son Goku dopo aver ripreso il controllo dallo stadio di Oozaru Dorato, grazie a Pan"
        ],

        currentText: 0,
    },

    methods: {

        nextImg: function() {
            if (this.currentImg == this.images.length - 1){
                this.currentImg = 0;              
            } else {
                this.currentImg++;
            }           
        },

        prevImg: function() {
            if (this.currentImg == 0){
                this.currentImg = this.images.length - 1;              
            } else {
                this.currentImg--;
            }
        },

        nextTitle: function() {
            if (this.currentTitle == this.title.length - 1){
                this.currentTitle = 0;              
            } else {
                this.currentTitle++;
            }  
        },

        prevTitle: function() {
            if (this.currentTitle == 0){
                this.currentTitle = this.title.length - 1;              
            } else {
                this.currentTitle--;
            }
        },

        nextText: function() {
            if (this.currentText == this.text.length - 1){
                this.currentText = 0;              
            } else {
                this.currentText++;
            }  
        },

        prevText: function() {
            if (this.currentText == 0){
                this.currentText = this.text.length - 1;              
            } else {
                this.currentText--;
            }
        },

    }

});