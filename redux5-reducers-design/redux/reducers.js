import { VisibilityFilters } from './actions';

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};

export const todoApp = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			/*
			不要修改 state。 
			使用 Object.assign() 新建了一个副本。
			不能这样使用 Object.assign(state, { visibilityFilter: action.filter })，
			因为它会改变第一个参数的值。你必须把第一个参数设置为空对象。你也可以开启对ES7提案对象展开运算符的支持, 
			从而使用 { ...state, ...newState } 达到相同的目的。
			*/ 
			return Object.assign({}, state, {visibilityFilter: action.filter});
		case 'ADD_TODO':
			return Object.assign({}, state, {
				todos: [
					...state.todos,
					{
						text: action.text,
						completed: false
					}
				
				]
			});
		case 'TOGGLE_TODO':
		  return Object.assign({}, state, {
		    todos: state.todos.map((todo, index) => {
		      if (index === action.index) {
		        return Object.assign({}, todo, {
		          completed: !todo.completed
		        })
		      }
		      return todo
		    })
		})
		default:
			return state;
	}
}












