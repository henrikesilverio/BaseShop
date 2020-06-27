<template>
  <v-card class="mx-auto">
    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tamanhos</v-card-title>

    <v-card-text>
      <v-chip-group v-model="selection" active-class="primary white--text" column mandatory>
        <v-chip>P</v-chip>
        <v-chip>M</v-chip>
        <v-chip>G</v-chip>
        <v-chip>GG</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: ""
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>