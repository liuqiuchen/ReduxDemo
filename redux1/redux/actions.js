// 这里编写action和action创建函数并通过export导出
/*const action = {
	type: 'ADD_TODO',
	payload: 'Learn Redux'
};*/

// View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。
// 可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
export const ADD_TODO = '添加 TODO';

// Action Creator
export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	}
}
const action = addTodo('Learn Redux');







