<template>
  <v-app>
    <promotion />
    <product-filter />
    <v-container>
      <v-row class="d-flex">
        <v-col>
          <v-pagination class="justify-center" v-model="page" :length="15" :total-visible="7"></v-pagination>
        </v-col>
      </v-row>

      <v-row>
        <v-col xl="12" sm="6" md="4" lg="4" v-for="product in products" :key="product.id">
          <product-card
            :id="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
          />
        </v-col>
      </v-row>

      <v-row class="d-flex">
        <v-col>
          <v-pagination class="justify-center" v-model="page" :length="15" :total-visible="7"></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "HomeIndex",

  components: {
    Promotion: () => import("./components/Promotion"),
    ProductFilter: () => import("./components/ProductFilter"),
    ProductCard: () => import("./components/ProductCard")
  },

  data: () => ({
    page: 1
  }),

  computed: {
    products: {
      get() {
        return this.$store.state.products;
      }
    }
  }
};
</script>