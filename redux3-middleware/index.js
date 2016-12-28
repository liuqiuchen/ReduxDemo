import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware,createStore } from 'redux';
import Counter from './components/Counter';
import { counter } from'./redux/reducers';

// 引入一个别人写好的中间件
import createLogger from 'redux-logger';
const logger = createLogger();

// counter就是一个reducer
const store = createStore(counter, applyMiddleware(logger));
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
		onIncrement={() => store.dispatch({type: 'INCREMENT'})}
		onDecrement={() => store.dispatch({type: 'DECREMENT'})}
	 />,
	rootEl
);

render();

store.subscribe(render);