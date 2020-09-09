import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        drawer: null,
        products: [
            {
                id: 1,
                name: "Produto 1",
                description: "descrição do produto 1",
                price: 123.45
            },
            {
                id: 2,
                name: "Produto 2",
                description: "descrição do produto 2",
                price: 223.45
            },
            {
                id: 3,
                name: "Produto 3",
                description: "descrição do produto 3",
                price: 323.45
            },
            {
                id: 4,
                name: "Produto 4",
                description: "descrição do produto 4",
                price: 423.45
            },
            {
                id: 5,
                name: "Produto 5",
                description: "descrição do produto 5",
                price: 523.45
            },
            {
                id: 6,
                name: "Produto 6",
                description: "descrição do produto 6",
                price: 623.45
            },
            {
                id: 7,
                name: "Produto 7",
                description: "descrição do produto 7",
                price: 723.45
            },
            {
                id: 8,
                name: "Produto 8",
                description: "descrição do produto 8",
                price: 823.45
            },
            {
                id: 9,
                name: "Produto 9",
                description: "descrição do produto 9",
                price: 923.45
            }
        ],
        shoppingCart: [],
        shoppingCartCount: 0,
        shoppingCartDrawer: null,
        starLoading: false,
        notification: {
            show: false,
            color: "info",
            message: ""
        },
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },
        SET_DRAWER(state, payload) {
            state.drawer = payload
        },
        SET_NOTIFICATION(state, payload) {
            state.notification = payload
        },
        SET_LOADING(state, payload) {
            state.starLoading = payload
        },
        SET_SHOPPING_CART(state, payload) {
            state.shoppingCart = payload
        },
        SET_SHOPPING_CART_COUNT(state, payload) {
            state.shoppingCartCount = payload
        },
        SET_SHOPPING_CART_DRAWER(state, payload) {
            state.shoppingCartDrawer = payload
        },
    },
    actions: {
        NOTIFICATION_ERROR({ commit }, message) {
            commit('SET_NOTIFICATION', {
                show: true,
                color: "error",
                message: message
            });
        },
        NOTIFICATION_INFO({ commit }, message) {
            commit('SET_NOTIFICATION', {
                show: true,
                color: "info",
                message: message
            });
        },
        SHOW_LOADING({ commit }) {
            commit('SET_LOADING', true);
        },
        HIDE_LOADING({ commit }) {
            commit('SET_LOADING', false);
        },
        TOGGLE_SHOPPING_CART_DRAWER({ commit }) {
            commit('SET_SHOPPING_CART_DRAWER', !this.state.shoppingCartDrawer);
        },
        ADD_SHOPPING_CART({ commit }, item) {
            this.state.shoppingCart.push(item)
            commit('SET_SHOPPING_CART', this.state.shoppingCart);
            commit('SET_SHOPPING_CART_COUNT', this.state.shoppingCartCount + 1);
        },
        REMOVE_SHOPPING_CART({ commit }, id) {
            commit('SET_SHOPPING_CART', this.state.shoppingCart.filter((item) => item.id !== id));
            commit('SET_SHOPPING_CART_COUNT', this.state.shoppingCartCount - 1);
        },
    },
})