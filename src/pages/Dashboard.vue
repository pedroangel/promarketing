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
              <!-- <div class="md-title">{{ juego.name }}</div> -->
            </md-card-header>

            <md-card-content>
              <span>{{ juego.name }}</span>
            </md-card-content>

            <md-card-actions>
              <span>{{ juego.image.alt }}</span>
            </md-card-actions>
            <md-card-actions>
              <md-button
                class="md-primary md-raised"
                @click="abrirDemo(juego.url)"
              >
                Demo
              </md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Preferences</md-dialog-title>

        <div class="video-container">
          <iframe :src="urlFrame" frameborder="0" allowfullscreen></iframe>
        </div>

        <md-dialog-actions>
          <md-button class="md-primary" @click="cerrarDemo()">
            Cerrar
          </md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-dialog {
  min-width: 95%;
}
.vue-friendly-iframe {
  width: 100%;
}
iframe {
  width: 100%;
  height: 65vh !important;
}
.PanelPaginas {
  position: relative;
  width: 97%;
  height: 65px;
  margin: 0 auto;
}
.btn-siguiente {
  position: absolute;
  right: 0;
}
.btn-anterior {
  position: absolute;
  left: 0;
}
.md-card-content {
  text-align: center;
  font-size: 16px;
  font-style: italic;
  font-weight: 800;
  text-shadow: 1px 1px rgb(32, 32, 32, 0.4);
}
.md-card {
  width: 100%;
  margin: 15px auto;
  display: inline-block;
  vertical-align: top;
}
.md-title {
  font-family: "Bookman";
  font-weight: 400;
}
.md-ripple {
  padding: 5px;
}
.md-subhead {
  text-transform: capitalize;
  color: white;
  font-family: "Bookman";
  font-weight: 800;
  font-size: 17px !important;
}
</style>

<script>
import juegos from "../assets/juegos.json";

export default {
  components: {},
  data() {
    return {
      Juegos: juegos.games[0],
      showDialog: false,
      urlFrame: ""
    };
  },
  methods: {
    abrirDemo(url) {
      this.urlFrame = url;
      this.showDialog = true;
    },
    cerrarDemo() {
      this.showDialog = false;
      this.urlFrame = "";
    }
  }
};
</script>
