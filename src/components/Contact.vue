<template>
  <section class="section contacts">
    <v-row class="text-center">
      <h2>Contact</h2>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <a :href="`${publicPath}CV.pdf`" download>
          <v-card
              class="pa-2"
              outlined
              tile
              hover
            >
            <v-img
              :src="require('@/assets/download.svg')"
              class="my-3 contact"
              contain
              height="100"
            />
            <p>CV</p>
          </v-card>
        </a>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <a href="tel:+33664412186">
          <v-card
              class="pa-2"
              outlined
              tile
              hover
            >
            <v-img
              :src="require('@/assets/phone-ring.svg')"
              class="my-3 contact"
              contain
              height="100"
            />
            <p>06.64.41.21.86</p>
          </v-card>
        </a>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <a href="mailto: jmagnoux@gmail.com">
          <v-card
              class="pa-2"
              outlined
              tile
              hover
            >
            <v-img
              :src="require('@/assets/email.svg')"
              class="my-3 contact"
              contain
              height="100"
            />
            <p>jmagnoux@gmail.com</p>
          </v-card>
        </a>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <a href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-magnoux-a0964a138/">
          <v-card
              class="pa-2"
              outlined
              tile
              hover
            >
            <v-img
              :src="require('@/assets/linkedin.svg')"
              class="my-3 contact"
              contain
              height="100"
            />
            <p>LinkedIn</p>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data: () => ({
    publicPath: process.env.BASE_URL
  })
}
</script>
<style scoped lang="scss">
  a {
    text-decoration: none;
  }
  .contact {
    filter: invert(34%) sepia(96%) saturate(2255%) hue-rotate(28deg) brightness(96%) contrast(102%);

    &.theme--dark {
      filter: invert(88%) sepia(19%) saturate(6396%) hue-rotate(335deg) brightness(94%) contrast(103%);
    }
  }
</style>
