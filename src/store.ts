import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 0,
		lists: [
			{ id: 1, task: "Home Office", done: true },
			{ id: 2, task: "Travel", done: true },
			{ id: 3, task: "Clean the apartment", done: false }
		]
	},
	getters: {
		finishList: state => {
			return state.lists.filter(list => list.done)
		},
		openList: state => {
			return state.lists.filter(list => !list.done)
		},
		getListElementById: (state) => (id: number) => {
			return state.lists.find(list => list.id === id)
		}
	},
	mutations: {
		increment (state) {
			if(state.count == 99){
				state.count = 99
			}
			state.count++
		},
		incrementBy (state, n) {
			if(state.count == 99 || (state.count += n) >= 99){
				state.count = 99
			}
			state.count += n
		},
		decrement (state) {
			if(state.count == 0){
				state.count = 0
			}
			state.count--
		},
		decrementBy (state, n) {
			if(state.count == 0 || (state.count -= n) <= 0){
				state.count = 0
			}
			state.count--
		}
	},
	actions: {
		increment (context) {
			context.commit('increment')
		},
		decrement (context) {
			context.commit('decrement')
		}
	},
});
