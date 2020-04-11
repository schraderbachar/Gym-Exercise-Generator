const app = new Vue({
  el: "#app",

  data: {
      /* stores values of exercises in the lists to be drawn from*/
        pecho: ['flecciones','flecciones inclinado','flecciones declinado','flecciones-ancho','fondo', 'alternar lado flecciones', ' flecciones apretón cercano'],
        espalda: ['remo con toalla','lat pulldown','toalla remo en el suelo', 'supermans', 't supermans', 'y supermans', 'flecciones hindu (moving seals)', 'extension de espalda en el suelo','levanta de codo','reverse snow angels (manos simpre arriba del suelo x 15)','full body drag (domindads en el suelo)'],
        piernas: ['sentadilla','pesa muerto con una pierna','BGSS','las arremetidas (lunges)', 'levanta de pantorilla','levanta de pantorilla desde sentadilla', 'hamstring curls', 'rdl con mochilla', 'sentadilla de pistola', 'step-ups','unica pierna levanta de poto'],
        hombros: ['flecciones pike', 'levanta de la silla', 'levanta de mochilla para hombro frente', 'rear delt chair raises', 'press de hombro con mochilla', 'felcciones de push back', 'toca de hombro', 'wall-walkouts' ],
        abdominales: ['hollow hold', 'pie arriba toca', 'bicicletas', 'insecto meurto', 'v-ups', 'penguinos', 'toca de lado al suelo desde plancha', 'one leg raises', 'levanta de piernas','6 inch mantenga de pierna', 'reverse crunch', 'crunch', 'sit-ups'],
        brazos: ['flecciones diamante', 'curls con mochilla', 'self resistance curls de bicep (con la mano en una mano)', 'elevado fleccions con apretón cerca', 'curls de la pared (feet split wall-twist palm in )', 'skull-crushers con mochilla', ],
/* variable to store the value of each of the lists selected excersises*/
        pecho1: ' ',
        espalda1: ' ',
        piernas1: ' ',
        hombros1: ' ',
        abdominales1: ' ',
        brazos1: ' ',

        pecho2: ' ',
        espalda2: ' ',
        piernas2: ' ',
        hombros2: ' ',
        abdominales2: ' ',
        brazos2: ' ',


  },

  methods: {
    picker: function() {

        /* assigns a random number that goes from 0-to the length of the array and gets the
        value at that index and displays it in the html for each array */
      var pechoNum = Math.floor(Math.random() * this.pecho.length);
      this.pecho1 = this.pecho[pechoNum];
      console.log(this.pecho1);

      var espaldaNum = Math.floor(Math.random() * this.espalda.length);
      this.espalda1 = this.espalda[espaldaNum];
      console.log(this.espalda1);

      var piernasNum = Math.floor(Math.random() * this.piernas.length);
      this.piernas1 = this.piernas[piernasNum];
      console.log(this.piernas1);

      var hombrosNum = Math.floor(Math.random() * this.hombros.length);
      this.hombros1 = this.hombros[hombrosNum];
      console.log(this.hombros1);

      var abdominalesNum = Math.floor(Math.random() * this.abdominales.length);
      this.abdominales1 = this.abdominales[abdominalesNum];
      console.log(this.abdominales1);

      var brazosNum = Math.floor(Math.random() * this.brazos.length);
      this.brazos1 = this.brazos[brazosNum];
      console.log(this.brazos1);

      /* the second set */

      var pechoNum2 = Math.floor(Math.random() * this.pecho.length);
      /* to not get the same number */
      while (pechoNum2 == pechoNum) {
        pechoNum2 = Math.floor(Math.random() * this.pecho.length);
      }
      this.pecho2 = this.pecho[pechoNum2];
      console.log(this.pecho2);

      var espaldaNum2 = Math.floor(Math.random() * this.espalda.length);
      while (espaldaNum2 == espaldaNum) {
        espaldaNum2 = Math.floor(Math.random() * this.espalda.length);
      }
      this.espalda2 = this.espalda[espaldaNum2];
      console.log(this.espalda2);

      var piernasNum2 = Math.floor(Math.random() * this.piernas.length);
      while (piernasNum2 == piernasNum) {
        piernasNum2 = Math.floor(Math.random() * this.piernas.length);
      }
      this.piernas2 = this.piernas[piernasNum2];
      console.log(this.piernas2);

      var hombrosNum2 = Math.floor(Math.random() * this.hombros.length);
      while (hombrosNum2 == hombrosNum) {
        hombrosNum2 = Math.floor(Math.random() * this.hombros.length);
      }
      this.hombros2 = this.hombros[hombrosNum2];
      console.log(this.hombros2);

      var abdominalesNum2 = Math.floor(Math.random() * this.abdominales.length);
      while (abdominalesNum2 == abdominalesNum) {
        abdominalesNum2 = Math.floor(Math.random() * this.abdominales.length);
      }
      this.abdominales2 = this.abdominales[abdominalesNum2];
      console.log(this.abdominales2);

      var brazosNum2 = Math.floor(Math.random() * this.brazos.length);
      while (brazosNum2 == brazosNum) {
        brazosNum2 = Math.floor(Math.random() * this.brazos.length);
      }
      this.brazos2 = this.brazos[brazosNum2];
      console.log(this.brazos2);









    }
  }


});
