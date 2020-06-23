<template>
  <v-container class="full-height">
    <v-form ref="form" v-model="valid">
      <v-row class="d-flex justify-center align-center">
        <v-col cols="5">
          <h1 class="text-center">Criar conta</h1>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="firstName"
                label="Nome"
                autocomplete="new-password"
                :counter="30"
                :rules="nameRules"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                label="Sobrenome"
                autocomplete="new-password"
                :counter="30"
                :rules="nameRules"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="E-mail"
                autocomplete="new-password"
                :counter="50"
                :rules="emailRules"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Senha"
                type="password"
                autocomplete="new-password"
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
              <v-btn block dark color="success" @click="validate()">Salvar</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    firstName: "",
    lastName: "",
    nameRules: [
      v => !!v || "Campo obrigatório",
      v => (v && v.length <= 30) || "O campo deve ser menor que 30 caracteres"
    ],
    email: "",
    emailRules: [
      v => !!v || "Campo obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail inválido"
    ],
    password: "",
    passwordRules: [v => !!v || "Campo obrigatório"]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$router.push("/");
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>