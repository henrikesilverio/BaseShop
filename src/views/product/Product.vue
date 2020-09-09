<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <gallery-slide />
      </v-col>
      <v-col cols="6">
        <product-details
          :id="product.id"
          :name="product.name"
          :description="product.description"
          :price="product.price"
        />
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

  computed: {
    product() {
      return this.$store.state.products.find(
        item => item.id == this.$route.params.id
      );
    }
  }
};
</script>
