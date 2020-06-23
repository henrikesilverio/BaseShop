<template>
  <v-row class="d-flex justify-center align-center full-height">
    <v-col cols="5">
      <h1 class="text-center">Redefinir sua senha</h1>
      <div class="text-center subtitle-1">Nós enviaremos um e-mail para redefini sua senha</div>

      <v-row>
        <v-col cols="12">
          <v-text-field label="E-mail" outlined dense></v-text-field>
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col cols="12">
          <v-btn text dark color="black" @click="toogleScreen">Lembrei a senha!</v-btn>
        </v-col>

        <v-col cols="12">
          <v-btn block dark color="success">Enviar</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ForgotPasswordPage",

  props: {
    toogleScreen: {
      type: Function
    }
  }
};
</script>