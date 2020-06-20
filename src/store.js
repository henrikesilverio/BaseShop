import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null,
        shoppingCart: [],
        shoppingCartCount: 0,
        shoppingCartDrawer: null,
        starLoading: false,
        notification: {
            show: false,
            color: "info",
            message: ""
        }
    },
    mutations: {
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