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

      <div class="text-center" v-if="user">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon size="35">mdi-account</v-icon>
              <span class="mr-2">Henrique</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in menu" :key="index" :to="item.link">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logoff">
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn text to="/login" v-if="!user">
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
    menu: [
      { name: "Pedidos", link: "/orders" },
      { name: "Perfil", link: "/profile" }
    ]
  }),

  methods: {
    toggleShoppingCartDrawer() {
      this.$store.dispatch("TOGGLE_SHOPPING_CART_DRAWER");
    },
    logoff(){
      this.$store.commit("SET_USER", null);
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
    },
    user: {
      get() {
        return this.$store.state.user;
      },
      set(val) {
        this.$store.commit("SET_USER", val);
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