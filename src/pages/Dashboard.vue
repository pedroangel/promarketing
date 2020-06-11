<template>
  <div class="content">
    <div class="md-layout">
      <div
        v-for="(juego, index) in Juegos"
        :key="index"
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <div>
          <md-card md-with-hover>
            <md-card-header>
              <img
                v-bind:src="juego.image.url_image"
                :title="juego.image.title"
                :alt="juego.image.alt"
              />
            </md-card-header>

            <md-card-content>
              <span>{{ juego.name }}</span>
            </md-card-content>

            <md-card-actions>
              <span>{{ juego.image.alt }}</span>
            </md-card-actions>
            <md-card-actions class="card-footer">
              <md-button
                class="md-success md-raised"
                @click="abrirDemo(juego.url, juego.name)"
              >
                Demo
              </md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>{{ nombreJuegoDemo }}</md-dialog-title>

        <div class="video-container">
          <iframe :src="urlFrame" frameborder="0" allowfullscreen></iframe>
        </div>

        <md-dialog-actions>
          <md-button class="md-danger" @click="cerrarDemo()">
            Cerrar
          </md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import juegos from "../assets/juegos.json";

export default {
  components: {},
  data() {
    return {
      Juegos: juegos.games[0],
      showDialog: false,
      urlFrame: "",
      nombreJuegoDemo: ""
    };
  },
  methods: {
    abrirDemo(url, nombre) {
      this.urlFrame = url;
      this.showDialog = true;
      this.nombreJuegoDemo = nombre;
    },
    cerrarDemo() {
      this.showDialog = false;
      this.urlFrame = "";
    }
  },
  metaInfo: {
    title: "Promarketing Chile",
    titleTemplate: "%s: Prueba Técnica",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "SPA que contiene la prueba técnica para el proceso de seleccion al cargo de programador Front End."
      },
      {
        name: "keywords",
        content:
          "promarketing, Promarketing chile, Promarketing-chile, prueba técnica, postulación, frontend"
      },
      {
        name: "author",
        content: "Ing. Pedro Alarcon"
      },
      {
        name: "robots",
        content: "index"
      }
    ]
  }
};
</script>
