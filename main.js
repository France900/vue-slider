// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

var app = new Vue(
  {
    el: "#root",
    data: {
      index: 0,
      theImg: [
        "./www.planetariozafferana.it.jpeg",
        "./immagini-e-tabelle-html-00.jpeg",
        "./immaginedascaricare.jpeg"
      ],
    },
    methods: {
      arrowLeft: function () {
        if (this.index > 0 ) {
          this.index--
        } else {
          this.index = this.theImg.length -1;
        }
      },
      arrowRight: function () {
        // if (this.index < this.theImg.length -1 ) {
        //   this.index++
        // } else {
        //   this.index = 0;
        // }
        if (this.index == this.theImg.length -1) {
          this.index = 0
        } else {
          this.index++;
        }
      },
      //questa funzione copiata spudoratamente ma compresa solo a metà
      dotSelection: function (topolino) {
        this.index = topolino
      },
      // con i bottoni
      // start: function () {
      //   this.interval = setInterval(this.arrowRight, 3000);
      // },
      // stop: function () {
      //   this.interval = clearInterval(this.interval);
      // },
      //fine copiatura
      // presentazione: setInterval(function(){ alert("Hello"); }, 3000);
    },
    // copiato dinuovo
    created: function () {
      setInterval(this.arrowRight, 3000);
    }
    // altra fine copiatura
  }
);
