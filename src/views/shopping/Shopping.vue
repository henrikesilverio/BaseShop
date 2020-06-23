<template>
  <v-container class="full-height text-center">
    <h1>Seu carrinho</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th colspan="2" class="text-left text-h6">Produto</th>
            <th class="text-left text-h6">Preço</th>
            <th class="text-center text-h6">Quantidade</th>
            <th class="text-right text-h6">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in shoppingCart" :key="item.id">
            <td class="text-left pa-0">
              <v-list-item-avatar tile size="75">
                <v-img :src="item.imgUrl"></v-img>
              </v-list-item-avatar>
            </td>
            <td class="text-left">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title" v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.description"></v-list-item-subtitle>
                    <v-list-item-subtitle>Tamanho: {{item.size}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon @click="removeItem(item.id)" color="black lighten-1">mdi-close-circle</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </td>
            <td class="text-left">{{ item.price | money }}</td>
            <td class="text-center">
              <v-text-field
                v-model="item.amount"
                class="align-center"
                type="number"
                solo
                hide-details
              ></v-text-field>
            </td>
            <td class="text-right">{{ item.price | subTotal(item.amount) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="text-right" colspan="5">
              <h2>Total: {{ total | money }}</h2>
            </td>
          </tr>
        </tfoot>
      </template>
    </v-simple-table>
    <v-row class="d-flex justify-end">
      <v-btn class="mx-2" color="info" to="/">Continue comprando</v-btn>
      <v-btn class="mx-2" color="success">Finalizar</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ShoppingCart",

  data: () => ({
    total: 0
  }),

  methods: {
    removeItem(id) {
      this.$store.dispatch("REMOVE_SHOPPING_CART", id);
    },
    setTotal() {
      this.total = this.$store.state.shoppingCart.reduce(
        (memo, item) => memo + item.price * item.amount,
        0
      );
    }
  },

  created() {
    this.setTotal();
  },

  watch: {
    shoppingCart: {
      handler() {
        this.setTotal();
      },
      deep: true
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
    }
  },

  filters: {
    money(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return `R$ ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },
    subTotal(price, amount) {
      let val = ((price * amount) / 1).toFixed(2).replace(".", ",");
      return `R$ ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }
  }
};
</script>

<style scoped>
  .v-list:hover {
    background-color: inherit
  }
</style>