<template>
  <v-row class="d-flex justify-center align-center full-height">
    <v-col cols="5">
      <h1 class="text-center">Login</h1>

      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="E-mail"
            autocomplete="new-password"
            :counter="50"
            :rules="emailRules"
            required
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Senha"
            autocomplete="new-password"
            type="password"
            :counter="10"
            :rules="passwordRules"
            required
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col cols="12">
          <v-btn text dark color="black" @click="toogleScreen">Esqueceu sua senha?</v-btn>
        </v-col>

        <v-col cols="12">
          <v-btn block dark color="success" @click="login">Entrar</v-btn>
        </v-col>

        <v-col cols="12">
          <v-btn text dark color="black" to="/account">Cadastre-se</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginPage",

  props: {
    toogleScreen: {
      type: Function
    }
  },

  data: () => ({
    email: "",
    emailRules: [
      v => !!v || "Campo obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail inválido"
    ],
    password: "",
    passwordRules: [v => !!v || "Campo obrigatório"]
  }),

  methods: {
    login() {
      this.$store.commit("SET_USER", {
        email: this.email,
        password: this.password
      });
      this.$router.push("/");
    }
  }
};
</script>