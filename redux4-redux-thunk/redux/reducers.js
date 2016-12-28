// 发起action的时候state怎么更新，编写reducer函数，传参是state和action

 export const counter = (state=0,action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}




