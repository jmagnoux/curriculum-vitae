<template>
  <section class="section timeline">
    <v-row class="text-center">
      <h2>Parcours</h2>
    </v-row>
    <v-timeline :dense="$vuetify.breakpoint.xsOnly">
      <v-timeline-item
        v-for="(item, i) in timeline"
        :key="i"
        small
      >
        <template v-slot:opposite>
          <span
            class="headline font-weight-bold"
            v-text="item.year"
          ></span>
        </template>
        <div class="py-4">
          <v-card
            elevation="4"
          >
            <v-card-title class="text-h6 light--text" :class="item.study?'blue':'orange'">
              {{item.title}}
            </v-card-title>
            <v-card-subtitle class="palce text-right light--text" :class="item.study?'blue':'orange'">
              {{item.place}}
            </v-card-subtitle>
            <v-card-text class="secondary text--primary">
              <p class="secondary text--primary" v-if="item.data1 != undefined && item.data1 != ''">
                {{item.data1}}
              </p>
              <p class="secondary text--primary" v-if="item.data2 != undefined && item.data2 != ''">
                {{item.data2}}
              </p>
              <p class="secondary text--primary" v-if="item.data3 != undefined && item.data3 != ''">
                {{item.data3}}
              </p>
              <a :href="item.link" v-if="item.link != undefined && item.link != ''">{{item.link}}</a>
            </v-card-text>
          </v-card>
        </div>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<script>
import json from '../json/timeline.json'
export default {
  name: 'timeline',
  data: () => ({
    timeline: json
  })
}
</script>
