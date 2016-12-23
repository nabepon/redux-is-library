import { bindActionCreators } from 'redux';

/**
 * incrementやdecrementは、実行するとただのobjectを返すだけ。
 * この処理を通ることでstore.dispatchと紐づき、stateも変更されるようになる
 */
export function mapDispatchToActions(store, Actions){
  const dispatch = store.dispatch;
  const ret = {...Actions};
  for(const i in ret){
    ret[i] = bindActionCreators(ret[i], dispatch);
  }
  return ret;
}

/**
 * jQueryのhasClassに相当する関数
 */
export function hasClass(e, name){
  return e.target.classList.contains(name);
}
