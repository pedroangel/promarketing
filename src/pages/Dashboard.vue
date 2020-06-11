<template>
  <div class="content">
    <div class="md-layout">
      <div
        v-for="juego in Juegos"
        :key="juego.id"
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
      >
        <div>
          <md-card
            md-with-hover
            :style="{ background: hexToRGBA(color.color, 0.1) }"
          >
            <md-ripple>
              <md-card-header
                :style="{ backgroundColor: color.color, textAlign: 'center' }"
              >
                <div class="md-title">{{ color.color }}</div>
                <div class="md-subhead">{{ color.name }}</div>
              </md-card-header>

              <md-card-content :style="{ color: hexToRGBA(color.color, 0.6) }">
                <span>{{ color.pantone_value }}</span>
              </md-card-content>

              <md-card-actions
                :style="{ borderTop: '1px solid ' + color.color }"
              >
                <span
                  :style="{
                    fontWeight: 800,
                    color: hexToRGBA(color.color, 0.4)
                  }"
                  >{{ color.year }}</span
                >
              </md-card-actions>
            </md-ripple>
          </md-card>
        </div>
      </div>

      <md-card-actions class="PanelPaginas">
        <md-button
          :disabled="btnAnterior"
          @click="
            () => {
              listadoColores('1');
              btnAnterior = !btnAnterior;
              btnSiguiente = !btnSiguiente;
            }
          "
          class="btn-anterior"
          >Anterior</md-button
        >
        <md-button
          :disabled="btnSiguiente"
          @click="
            () => {
              listadoColores('2');
              btnSiguiente = !btnSiguiente;
              btnAnterior = !btnAnterior;
            }
          "
          class="btn-siguiente"
          >Siguiente</md-button
        >
      </md-card-actions>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      Juegos: null,
      btnSiguiente: false,
      btnAnterior: true
    };
  },
  mounted() {
    this.listadoJuegos();
  },
  methods: {
    listadoJuegos() {
      axios
        .get("https://promarketingchile.com/games.json")
        .then(response => {
          this.Juegos = response.data.data;
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
  }
};
</script>
