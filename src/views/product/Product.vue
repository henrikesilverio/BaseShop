<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <gallery-slide />
      </v-col>
      <v-col cols="6">
        <product-details />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <product-specification />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductIndex",

  components: {
    GallerySlide: () => import("./components/GallerySlide"),
    ProductDetails: () => import("./components/ProductDetails"),
    ProductSpecification: () => import("./components/ProductSpecification")
  },

  data: () => ({
    //
  })
};
</script>
