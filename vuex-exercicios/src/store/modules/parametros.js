export default {
    state: {
        quantidade: 4,
        preco: 10.50
    },
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    }
}