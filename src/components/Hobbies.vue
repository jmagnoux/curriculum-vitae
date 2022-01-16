<template>
  <section class="section hobbies">
    <v-row class="text-center">
      <h2>Loisirs</h2>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" sm="4">
        <v-card
            class="pa-2"
            outlined
            shaped
          >
          <v-img
            :src="require('@/assets/bakery.svg')"
            class="my-3 hobby"
            contain
            height="200"
          />
          <p>Pâtisserie</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
            class="pa-2"
            outlined
            shaped
          >
          <v-img
            :src="require('@/assets/dice.svg')"
            class="my-3 hobby"
            contain
            height="200"
          />
          <p>Jeu de rôle</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
            class="pa-2"
            outlined
            shaped
          >
          <v-img
            :src="require('@/assets/3d-print.svg')"
            class="my-3 hobby"
            contain
            height="200"
          />
          <p>Impression 3D</p>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'hobbies',
  data: () => ({
  })
}
</script>
<style scoped lang="scss">
  .hobby {
    filter: invert(22%) sepia(42%) saturate(691%) hue-rotate(163deg) brightness(90%) contrast(88%);

    &.theme--dark {
      filter: invert(55%) sepia(17%) saturate(614%) hue-rotate(155deg) brightness(95%) contrast(95%);
    }
  }
</style>
