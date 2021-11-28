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
            "Goku",
            "Goku Super Sayan",
            "Goku Super Sayan liv 2",
            "Goku Super Sayan liv 3",
            "Goku Super Sayan liv 4"
        ],

        currentTitle: 0,
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
            this.currentTitle++;
        },

        prevTitle: function() {
            this.currentTitle--;
        }

    }

});