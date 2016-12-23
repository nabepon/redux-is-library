/**
 * state構造を定義する。
 * stateの種類を増やしたい場合はここに追加していく。
 * store.getState().counter が使えるようになるための処理がここ。
 */
var reducer = (function(){
  return Redux.combineReducers({
    counter: Actions.reducer,
  });
})();
