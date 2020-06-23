<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
          <h2 class="white--text">BaseShop</h2>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn text to="/login">
        <span class="mr-2">Entre ou Cadastre-se</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn text @click="toggleShoppingCartDrawer">
        <v-badge overlap color="green" :value="shoppingCartCount" :content="shoppingCartCount">
          <v-icon size="35">mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <shopping-cart />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Index",

  components: {
    ShoppingCart: () => import("./components/ShoppingCart")
  },

  data: () => ({
    //
  }),

  methods: {
    toggleShoppingCartDrawer() {
      this.$store.dispatch("TOGGLE_SHOPPING_CART_DRAWER");
    }
  },

  computed: {
    shoppingCartCount: {
      get() {
        return this.$store.state.shoppingCartCount;
      },
      set(val) {
        this.$store.commit("SET_SHOPPING_CART_COUNT", val);
      }
    }
  }
};
</script>

<style scoped>
.full-height {
  height: 100%;
}
</style>