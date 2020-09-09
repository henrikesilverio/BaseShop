<template>
  <v-container class="full-height text-center">
    <h1>Seus pedidos</h1>
    <v-expansion-panels class="mb-6">
      <v-expansion-panel v-for="(order, i) in orders" :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <v-row align="center" class="spacer" no-gutters>
            <v-col cols="6">
              <v-icon size="25">mdi-cart-outline</v-icon>
              <span class="grey--text">N° Pedido:</span>
              <strong class="ml-1">123456</strong>
            </v-col>

            <v-col class="text-no-wrap text-right" cols="6">
              <span class="grey--text">Valor total:</span>
              <strong class="ml-1">R$ 123,23</strong>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-divider></v-divider>
          <v-row>
            <v-col class="text-left">
              <h4>Quantidade de produtos: 4</h4>
            </v-col>
            <v-col class="text-right">
              <h4>Previsão de entrega: 25/07/2020</h4>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="text-left">
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-avatar tile size="55">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="title">Produto</v-list-item-title>
                    <v-list-item-subtitle class="text--primary">Tamanho</v-list-item-subtitle>
                    <v-list-item-subtitle>Quatidade: 1</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-avatar tile size="55">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="title">Produto</v-list-item-title>
                    <v-list-item-subtitle class="text--primary">Tamanho</v-list-item-subtitle>
                    <v-list-item-subtitle>Quatidade: 1</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-avatar tile size="55">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="title">Produto</v-list-item-title>
                    <v-list-item-subtitle class="text--primary">Tamanho</v-list-item-subtitle>
                    <v-list-item-subtitle>Quatidade: 1</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-avatar tile size="55">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="title">Produto</v-list-item-title>
                    <v-list-item-subtitle class="text--primary">Tamanho</v-list-item-subtitle>
                    <v-list-item-subtitle>Quatidade: 1</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12">
              <v-progress-linear
                background-opacity="0.4"
                buffer-value="100"
                height="10"
                value="25"
                color="green"
              ></v-progress-linear>
            </v-col>
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">Pedido</v-list-item-title>
                    <v-list-item-subtitle class="text--primary">Aprovado</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">Pagamento</v-list-item-title>
                    <v-list-item-subtitle class="text--primary">Não confirmado</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">Envio</v-list-item-title>
                    <v-list-item-subtitle class="text--primary"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="3">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">Pedido Concluído</v-list-item-title>
                    <v-list-item-subtitle class="text--primary"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col>
              <v-card class="text-left" color="grey lighten-1">
                <v-card-title>Endereço de entrega</v-card-title>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Rua projeto A, N° 100</v-list-item-title>
                    <v-list-item-title>Centro</v-list-item-title>
                    <v-list-item-title>Maringá-PR</v-list-item-title>
                    <v-list-item-title>87000-000</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="text-right" color="grey lighten-1">
                <v-card-title>Valores</v-card-title>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Sub-total</v-list-item-title>
                    <v-list-item-title>Frente</v-list-item-title>
                    <v-list-item-title>Desconto</v-list-item-title>
                    <v-list-item-title>Vale</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="text-left" color="grey lighten-1">
                <v-card-title>Forma de pagamento</v-card-title>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon size="100">mdi-credit-card-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>1 X R$ 123,23</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    orders: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to Vuetify.js!",
        excerpt: "Thank you for joining our community..."
      }
    ]
  })
};
</script>