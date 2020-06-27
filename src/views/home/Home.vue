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
    page: 1,
    products: [
      {
        id: 1,
        name: "Produto 1",
        description: "descrição do produto 1",
        price: 123.45
      },
      {
        id: 2,
        name: "Produto 2",
        description: "descrição do produto 2",
        price: 223.45
      },
      {
        id: 3,
        name: "Produto 3",
        description: "descrição do produto 3",
        price: 323.45
      },
      {
        id: 4,
        name: "Produto 4",
        description: "descrição do produto 4",
        price: 423.45
      },
      {
        id: 5,
        name: "Produto 5",
        description: "descrição do produto 5",
        price: 523.45
      },
      {
        id: 6,
        name: "Produto 6",
        description: "descrição do produto 6",
        price: 623.45
      },
      {
        id: 7,
        name: "Produto 7",
        description: "descrição do produto 7",
        price: 723.45
      },
      {
        id: 8,
        name: "Produto 8",
        description: "descrição do produto 8",
        price: 823.45
      },
      {
        id: 9,
        name: "Produto 9",
        description: "descrição do produto 9",
        price: 923.45
      }
    ]
  })
};
</script>