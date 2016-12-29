import { VisibilityFilters } from './actions';
import { combineReducers } from 'redux';

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default: 
			return state
	}
};

const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]

		case 'TOGGLE_TODO':
			return state.map((todo, index) => {
				if(index === action.index) {
					return Object.assign({}, state, {completed: !todo.completed});
				}
				return todo;
			});
		default: 
			return state;
	}
};

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;











