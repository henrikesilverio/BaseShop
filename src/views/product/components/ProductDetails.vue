<template>
  <v-card class="mx-auto" height="390">
    <v-card-title>{{name}}</v-card-title>

    <v-card-text>
      <div>{{description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>{{price | money}}</v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tamanhos</v-card-title>

    <v-card-text>
      <v-chip-group v-model="size" active-class="primary white--text" column mandatory>
        <v-chip value="P">P</v-chip>
        <v-chip value="M">M</v-chip>
        <v-chip value="G">G</v-chip>
        <v-chip value="GG">GG</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-text-field
        solo
        dense
        readonly
        hide-details
        v-model="amount"
        class="ml-2 v-text-field-center"
        label="Quantidade"
        append-icon="mdi-plus"
        prepend-inner-icon="mdi-minus"
        @click:append="upAmount"
        @click:prepend-inner="downAmount"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn
        class="mr-2 white--text"
        color="green accent-4"
        @click="addShoppingCart()"
      >Adicionar no carrinho</v-btn>
    </v-card-actions>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon size="40">mdi-facebook</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon size="40">mdi-instagram</v-icon>
      </v-btn>

      <v-btn icon class="mr-2">
        <v-icon size="40">mdi-whatsapp</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    size: "",
    amount: 1
  }),

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

  methods: {
    upAmount() {
      this.amount++;
    },
    downAmount() {
      this.amount--;
    },
    addShoppingCart() {
      let product = {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        imgUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        amount: this.amount,
        size: this.size
      };

      this.$store.dispatch("ADD_SHOPPING_CART", product);
      this.$router.push("/checkout");
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