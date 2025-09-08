/**
 * This is a Vuex store module for managing app component state in a Vue.js application,
 * such as sidebar visibility, screen size, etc.
 * NOT FOR MODULE USE CASE.
 * 
 */
// initial state
// shape: [{ id, quantity }]
const state = () => ({
    sidebar_width: 250, // sidebar width
    sidebar_width_collapsed: 60, // sidebar width when collapsed
    inverted: false, // sidebar inverted color
    collapsed: false, // sidebar collapse
    mobile_slide_menu: false, // preview sidebar menu on mobile
    is_mobile: window.innerWidth < 1024, // is mobile screen
});

// getters
const getters = {
    get_sidebar_width: (state) => {
        return state.sidebar_width + "px";
    },
    get_sidebar_width_collapsed: (state) => {
        return state.sidebar_width_collapsed + "px";
    },
    get_inverted: (state) => {
        return state.inverted;
    },
    get_collapsed: (state) => {
        return state.collapsed;
    },
    get_mobile_slide_menu: (state) => {
        return state.mobile_slide_menu;
    },
    get_is_mobile: (state) => {
        return state.is_mobile;
    },
};

// actions (use dispatch)
const actions = {
    update_inverted({ commit, state }) {
        commit('set_inverted', !state.inverted);
    },
    update_collapsed({ commit, state }) {
        commit('set_collapsed', !state.collapsed);
    },
    update_mobile_slide_menu({ commit }, value) {
        commit('set_mobile_slide_menu', value);
    },
    handle_resize({ commit }) {
        commit('set_is_mobile', window.innerWidth < 1024);
    },
};

// mutations (use commit)
const mutations = {
    set_inverted(state, inverted) {
        state.inverted = inverted;
    },
    set_collapsed(state, collapsed) {
        state.collapsed = collapsed;
    },
    set_mobile_slide_menu(state, mobile_slide_menu) {
        state.mobile_slide_menu = mobile_slide_menu;
    },
    set_is_mobile(state, is_mobile) {
        state.is_mobile = is_mobile;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {
        // nested
    }
};