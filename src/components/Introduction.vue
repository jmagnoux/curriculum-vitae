<template>
  <section class="section introduction">
    <v-parallax :src="$vuetify.theme.dark ? require('@/assets/binary-dark.jpg') : require('@/assets/binary-light.jpg')">
      <div class="wrapper">
        <h1>Jérôme Magnoux</h1>
        <h2>Développeur web full-stack</h2>
        <v-row color="orange">
          <v-col cols="6" sm="3" class="d-flex justify-space-around">
            <p class="d-flex flex-column align-center wobble-vertical-on-hover">
              <v-icon x-large color="orange">mdi-xml</v-icon>
              <span class="font-weight-bold">Front-end</span>
            </p>
          </v-col>
          <v-col cols="6" sm="3" class="d-flex justify-space-around">
            <p class="d-flex flex-column align-center wobble-vertical-on-hover">
              <v-icon x-large color="orange">mdi-database</v-icon>
              <span class="font-weight-bold">Back-end</span>
            </p>
          </v-col>
          <v-col cols="6" sm="3" class="d-flex justify-space-around">
            <p class="d-flex flex-column align-center wobble-vertical-on-hover">
              <v-icon x-large color="orange">mdi-cellphone</v-icon>
              <span class="font-weight-bold">Mobile</span>
            </p>
          </v-col>
          <v-col cols="6" sm="3" class="d-flex justify-space-around">
            <p class="d-flex flex-column align-center wobble-vertical-on-hover">
              <v-icon x-large color="orange">mdi-earth</v-icon>
              <span class="font-weight-bold">Anglais</span>
            </p>
          </v-col>
        </v-row>
      </div>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: 'introduction',
  data: () => ({
  })
}
</script>
<style lang="scss">
h1 {
  font-size: 32px;
}
h2 {
  font-size: 24px;
}
.v-parallax {
  .v-parallax__content {
    color: var(--v-orange-base) !important;
    text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;
    font-size: 16px;
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

    * {
      height: fit-content;
    }

    .wrapper {
      margin: auto 0;
    }
  }
}
@-webkit-keyframes wobble-vertical-on-hover {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes wobble-vertical-on-hover {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.wobble-vertical-on-hover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.wobble-vertical-on-hover:hover, .wobble-vertical-on-hover:focus, .wobble-vertical-on-hover:active {
  -webkit-animation-name: wobble-vertical-on-hover;
  animation-name: wobble-vertical-on-hover;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>
