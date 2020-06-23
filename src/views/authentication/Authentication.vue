<template>
  <v-container class="full-height">
    <v-window v-model="isLoginScreen">
      <v-window-item :value="true">
        <login-page :toogleScreen="toogleScreen" />
      </v-window-item>

      <v-window-item :value="false">
        <forgot-password-page :toogleScreen="toogleScreen" />
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script>
export default {
  name: "AuthenticationLogin",

  data: () => ({
    isLoginScreen: true
  }),

  components: {
    LoginPage: () => import("./pages/Login"),
    ForgotPasswordPage: () => import("./pages/ForgotPassword")
  },

  methods: {
    toogleScreen() {
      this.isLoginScreen = !this.isLoginScreen;
    }
  }
};
</script>