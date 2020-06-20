<template>
  <v-row class="d-flex justify-center align-center full-height">
    <v-col cols="5">
      <h1 class="text-center">Login</h1>

      <v-row>
        <v-col cols="12">
          <v-text-field label="E-mail" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-text-field label="Senha" type="password" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col cols="12">
          <v-btn text dark color="black" @click="toogleScreen">Esqueceu sua senha?</v-btn>
        </v-col>

        <v-col cols="12">
          <v-btn block dark color="success">Entrar</v-btn>
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
};
</script>