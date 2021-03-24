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
    },
  }
);
