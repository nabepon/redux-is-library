var utils = (function(){
  /**
   * incrementやdecrementは、実行するとただのobjectを返すだけ。
   * この処理を通ることでstore.dispatchと紐づき、stateも変更されるようになる
   */
  var mapDispatchToActions = function(store, Actions){
    var dispatch = store.dispatch;
    var ret = Object.assign({}, Actions);
    for(var i in ret){
      ret[i] = Redux.bindActionCreators(ret[i], dispatch);
    }
    return ret;
  };

  /**
   * jQueryのhasClassに相当する関数
   */
  var hasClass = function(e, name){
    return e.target.classList.contains(name);
  };

  return {
    mapDispatchToActions: mapDispatchToActions,
    hasClass: hasClass
  }
})();
