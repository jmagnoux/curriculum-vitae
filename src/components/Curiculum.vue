<template>
  <v-container>
    <v-btn
      class="mx-2"
      fab
      fixed
      :dark="$vuetify.theme.dark"
      small
      color="dark"
      right
      top
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon :dark="$vuetify.theme.dark">
        mdi-theme-light-dark
      </v-icon>
    </v-btn>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      :dark="$vuetify.theme.dark"
      small
      fixed
      bottom
      right
      @click="toTop"
    >
      <v-icon :dark="$vuetify.theme.dark">mdi-chevron-up</v-icon>
    </v-btn>
    <introduction/>
    <skills/>
    <timeline/>
    <hobbies/>
    <contact/>
  </v-container>
</template>

<script>
import introduction from './Introduction'
import timeline from './Timeline'
import skills from './Skills'
import hobbies from './Hobbies'
import contact from './Contact'
export default {
  name: 'curiculum',

  components: {
    introduction,
    timeline,
    skills,
    hobbies,
    contact
  },

  data: () => ({
    fab: false
  }),
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style lang="scss">
  .section {
    * {
      word-break: break-word;
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }
    &:not(:first-of-type) {
      padding: 24px 0;
      border-top: solid 1px;
    }
    &:first-of-type {
      padding-bottom: 24px;
    }
  }
</style>
