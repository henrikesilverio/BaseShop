<template>
  <v-carousel height="250" cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in promotions" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ slide }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Promotion",

  data: () => ({
    colors: ["info", "success", "warning", "error"],
    promotions: ["Promoção 1", "Promoção 2", "Promoção 3", "Promoção 4"]
  })
};
</script>