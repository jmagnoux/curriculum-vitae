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
      @click="darkLight"
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
    <v-dialog
      v-model="dialog"
      transition="fab-transition"
      width="320"
    >
      <v-img
        :src="require('@/assets/les-visiteurs.gif')"
        contain
        height="180"
      />
    </v-dialog>
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
    fab: false,
    dialog: false,
    count: 0
  }),
  methods: {
    darkLight () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.count++
      if (!(this.count % 10)) {
        this.dialog = true
      }
    },
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
  h2 {
    &:first-child {
      color: var(--v-primary-base);
    }
  }
  .headline {
    color: var(--v-primary-base);
  }
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

  .za-warudo {
    -webkit-animation: 1s linear 3.5s 2 alternate za_warudo;
    animation: 1s linear 3.5s 2 alternate za_warudo;
  }

  @-webkit-keyframes za_warudo { from { filter:invert(0); } to { filter:invert(1); }  }
  @keyframes za_warudo { from { filter:invert(0); } to { filter:invert(1); }  }
</style>
