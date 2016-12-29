import { createStore } from 'redux';
import todoApp from './redux/reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './redux/actions';

const store = createStore(todoApp);

// 打印初始状态
console.log('打印初始状态：');
console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

console.log('打印监听发起调遣的状态：');

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));

// 停止监听 state 更新
unsubscribe();












