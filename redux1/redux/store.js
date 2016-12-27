import { createStore } from 'redux';
import { addTodo, ADD_TODO } from './actions';
import { reducer } from './reducers';

// createStore函数接受另一个函数作为参数，返回生成新的Store对象
const store = createStore(reducer);
console.log(store.getState());

store.dispatch(addTodo('Learn Redux'));
console.log(store.getState());