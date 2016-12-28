import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware,createStore } from 'redux';
import Counter from './components/Counter';
import { addCounter, reduceCounter } from './redux/actions'
import { counter } from'./redux/reducers';

// 引入别人写好的中间件
import promiseMiddleware from 'redux-promise'; // 处理异步操作，是在actions里面添加异步的处理
import ReduxThunk from 'redux-thunk'; // 处理异步操作，是在actions里面添加异步的处理
import createLogger from 'redux-logger';
const logger = createLogger();

// counter就是一个reducer
const store = createStore(counter, 
	applyMiddleware(
		ReduxThunk,
		promiseMiddleware,
		logger
	)
);
const rootEl = document.getElementById('root');

/*// 改造dispatch，添加中间件
let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
	console.log('dispatching', action);
	next(action);
	console.log('next state: ', store.getState());
}*/

const render = () => ReactDOM.render(
	<Counter
		value={store.getState()}
		onIncrement={() => store.dispatch(addCounter('增加计数'))}
		onDecrement={() => store.dispatch(reduceCounter('减少计数'))}
	 />,
	rootEl
);

render();

store.subscribe(render);