<template>
  <div>
    <v-carousel height="250" cycle hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in promotions" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-toolbar color="primary" max-height="64" dark>
      <v-col cols="6">
        <v-select
          v-model="brand"
          class="mt-7"
          label="Marcas"
          :items="brands"
          dense
          outlined
          multiple
        >
          <template v-slot:selection="{ item, index }">
            <v-chip small v-if="index <= 1">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 2" class="grey--text caption">(+{{ brand.length - 2 }} outros)</span>
          </template>
        </v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="category"
          class="mt-7"
          label="Categorias"
          :items="categories"
          dense
          outlined
          multiple
        >
          <template v-slot:selection="{ item, index }">
            <v-chip small v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 2" class="grey--text caption">(+{{ category.length - 1 }} outros)</span>
          </template>
        </v-select>
      </v-col>
    </v-toolbar>

    <v-container>
      <v-row class="d-flex">
        <v-col>
          <v-pagination class="justify-center" v-model="page" :length="15" :total-visible="7"></v-pagination>
        </v-col>
      </v-row>

      <v-row>
        <v-col xl="12" sm="6" md="4" lg="4" v-for="product in products" :key="product.id">
          <productCard
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
      <!-- <dashboard-core-drawer /> -->

      <!-- <dashboard-core-view /> -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProductIndex",

  components: {
    ProductCard: () => import("./components/ProductCard")
    //DashboardCoreDrawer: () => import('./components/core/Drawer'),
    //DashboardCoreView: () => import('./components/core/View'),
  },

  data: () => ({
    colors: ["info", "success", "warning", "error"],
    promotions: ["Promoção 1", "Promoção 2", "Promoção 3", "Promoção 4"],
    brands: ["Adidas", "Dell", "Ryzem", "Sansung", "LG"],
    categories: ["Tenis", "Computadores", "Informatica", "TVs", "Monitores"],
    brand: "",
    category: "",
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
  }),

  watch: {
    multiple(val) {
      if (val) this.model = [this.model];
      else this.model = this.model[0] || "Foo";
    }
  }
};
</script>
