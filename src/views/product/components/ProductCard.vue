<template>
  <v-card class="mx-auto" max-width="400">
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
    <v-card-title>
      <h2 class="display-1">{{ name }}</h2>
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text>
      <div class="mb-4 text-h6 font-weight-bold green--text">{{ price | money }}</div>
      {{description}}
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <span class="subheading">Tamanhos</span>

      <v-chip-group v-model="selection" active-class="green text--accent-4" mandatory>
        <v-chip>P</v-chip>
        <v-chip>M</v-chip>
        <v-chip>G</v-chip>
        <v-chip>GG</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        class="white--text"
        color="green accent-4"
        @click="addShoppingCart({ id, name, price })"
      >Adicionar no carrinho</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductIndex",

  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: "Nome do produto"
    },
    description: {
      type: String,
      default: "Descrição do produto"
    },
    price: {
      type: Number,
      default: 0.0
    }
  },

  data: () => ({
    selection: null
  }),

  methods: {
    addShoppingCart(item) {
      item.imgUrl = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
      this.$store.dispatch("ADD_SHOPPING_CART", item);
    }
  },

  filters: {
    money(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return `R$ ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }
  }
};
</script>