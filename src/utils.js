import { bindActionCreators } from 'redux';

export function mapDispatchToActions(store, Actions){
  const dispatch = store.dispatch;
  const ret = {...Actions};
  for(var i in ret){
    ret[i] = bindActionCreators(ret[i], dispatch);
  }
  return ret;
}

export function hasClass(e, name){
  return e.target.classList.contains(name);
}
