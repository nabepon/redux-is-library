var Actions = (function(){
  /******************************************
   * 定数
   * switch caseでtype判定するためのお作法
   ******************************************/
  var INCREMENT = 'INCREMENT';
  var DECREMENT = 'DECREMENT';

  /******************************************
   * Actions
   * stateを変更する関数
   * typeとpayloadはお作法
   ******************************************/
  var increment = function(current) {
    return {
      type: INCREMENT,
      payload: {
        count: current + 1
      },
    }
  };

  var decrement = function(current) {
    return {
      type: DECREMENT,
      payload: {
        count: current - 1
      },
    }
  };

  /******************************************
   * 初期値のお作法
   ******************************************/
  var initialState = {
    count: 0
  };

  /******************************************
   * reducer
   * stateを作成、変更するための薄い関数
   * store.dispatch(increment()) とすることで
   * Actionとreducerが紐づきstateが更新される
   ******************************************/
  var reducer = function(state, action) {
    if(!state){
      state = initialState;
    }
    var type = action.type;
    var payload = action.payload;

    switch (type) {
      case INCREMENT:
        return Object.assign({}, state, payload);

      case DECREMENT:
        return Object.assign({}, state, payload);

      default:
        return state;
    }
  };

  return {
    increment: increment,
    decrement: decrement,
    reducer: reducer,
  };
})();
