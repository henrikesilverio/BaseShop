<template>
  <v-navigation-drawer v-model="shoppingCartDrawer" width="350" temporary right app>
    <template v-slot:prepend>
      <v-container v-if="shoppingCart.length === 0">
        <v-row class="d-flex justify-center align-center my-10">
          <v-icon size="70">mdi-cart-off</v-icon>
        </v-row>
        <h3 class="text-center">Não há produtos no carrinho</h3>
        <v-divider></v-divider>
        <v-btn class="info" @click="closeDrawer" block>Continue comprando</v-btn>
      </v-container>

      <v-container v-if="shoppingCart.length !== 0">
        <h3 class="text-center">Produtos no carrinho</h3>
      </v-container>
    </template>

    <v-divider></v-divider>

    <v-list-item v-for="item in shoppingCart" :key="item.id" link>
      <v-list-item-avatar tile size="55">
        <v-img :src="item.imgUrl"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">{{ item.name }}</v-list-item-title>

        <v-list-item-subtitle>{{ item.price | money }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon @click="removeItem(item.id)">
          <v-icon color="grey lighten-1">mdi-close-circle</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>

    <v-divider></v-divider>

    <div class="my-4 mr-2" v-if="shoppingCart.length !== 0">
      <h3 class="text-right">
        Total:
        <span class="green--text">{{ total | money }}</span>
      </h3>
    </div>

    <div class="pa-2" v-if="shoppingCart.length !== 0">
      <v-btn class="success" to="/checkout" block>Finalizar</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "ShoppingCart",

  methods: {
    removeItem(id) {
      this.$store.dispatch("REMOVE_SHOPPING_CART", id);
    },
    closeDrawer() {
      this.$store.commit("SET_SHOPPING_CART_DRAWER", false);
    }
  },

  computed: {
    shoppingCart: {
      get() {
        return this.$store.state.shoppingCart;
      },
      set(val) {
        this.$store.commit("SET_SHOPPING_CART", val);
      }
    },
    shoppingCartDrawer: {
      get() {
        return this.$store.state.shoppingCartDrawer;
      },
      set(val) {
        this.$store.commit("SET_SHOPPING_CART_DRAWER", val);
      }
    },
    total() {
      return this.$store.state.shoppingCart.reduce(
        (memo, item) => memo + item.price,
        0
      );
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
