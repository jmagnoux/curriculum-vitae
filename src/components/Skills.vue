<template>
  <section class="section skills">
    <v-row class="text-center">
      <h2>Compétences</h2>
    </v-row>
    <v-row v-for="(skill,i) in skills" :key="skill.category+'-'+i">
      <v-col cols="12">
        {{skill.category}}
      </v-col>
      <v-row class="text-center">
        <v-col cols="6" sm="4" md="3" lg="2" v-for="(value, key, index) in skill.data" :key="key+'-'+index">
          <v-progress-circular
            :rotate="90"
            :size="100"
            :width="15"
            :value="value"
            :color="i%2?'blue':'orange'"
          >
            {{ value }}
          </v-progress-circular>
          <p>{{key}}</p>
        </v-col>
      </v-row>
    </v-row>
  </section>
</template>

<script>
import json from '../json/skills.json'
export default {
  name: 'skills',
  data: () => ({
    skills: json
  })
}
</script>
