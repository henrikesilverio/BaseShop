<template>
  <v-card class="mx-auto" max-width="400">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mx-auto" max-width="344">
          <v-img
            height="250"
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          ></v-img>
          <v-fade-transition>
            <v-overlay v-if="hover" color="primary" absolute>
              <v-btn :to="{ name: routeName, params: { id }  }">Ver detalhes</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>

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
      <v-chip-group v-model="size" active-class="primary white--text" column mandatory>
        <v-chip value="P">P</v-chip>
        <v-chip value="M">M</v-chip>
        <v-chip value="G">G</v-chip>
        <v-chip value="GG">GG</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        class="white--text"
        color="green accent-4"
        @click="addShoppingCart({ id, name, price, description })"
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
    size: "",
    routeName: "product"
  }),

  methods: {
    addShoppingCart(item) {
      item.imgUrl = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
      item.amount = 1;
      item.size = this.size;
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