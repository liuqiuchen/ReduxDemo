// 发起action的时候state怎么更新，编写reducer函数，传参是state和action

const defaultState = 0;

export const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case '添加 TODO':
      return state + 1;
    default: 
      return state;
  }
};





