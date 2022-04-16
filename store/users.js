export const state = () => ({
    users: []
})

export const mutations = {

    setUsers(state, users) {
        state.users = users
    }
}

export const actions = {
    async fetch({ commit }) {
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users'
        )
        commit('setUsers', users)
    }
}

//**s - state (shortcut) */ 
//**Применил только для примера комментария - лучше писать понятные наименования*/
export const getters = {
    users: s => s.users

}