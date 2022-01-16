<template>
  <v-app>
    <v-main>
      <v-responsive class="mx-auto" max-width="1000px">
        <curiculum/>
    </v-responsive>
    </v-main>
  </v-app>
</template>

<script>
import curiculum from './components/Curiculum'

export default {
  name: 'App',

  components: {
    curiculum
  },

  data: () => ({
  })
}
</script>
