import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as Actions from './Actions';

const store = createStore(reducer, {});
const app = document.querySelector('#app');

const rendering = ()=>{
  const state = store.getState().ActionReducer;
  app.innerHTML = `
  <div>
    <div>${state.count}</div>
    <button class="js-increment el1">increment</button>
    <button class="js-decrement el2">decrement</button>
  </div>
`;
};

/**
 * util
 */
function mapDispatchToActions(Actions){
  const ret = {...Actions};
  for(var i in ret){
    ret[i] = bindActionCreators(ret[i], store.dispatch);
  }
  return ret;
}

function hasClass(e, name){
  return e.target.classList.contains(name);
}


/**
 * initialize
 */
rendering();
const unsubscribe = store.subscribe(rendering);
const actions = mapDispatchToActions(Actions);
app.addEventListener("click", (e)=>{
  const state = store.getState().ActionReducer;
  if(hasClass(e, "js-increment")){
    actions.increment(state.count);
  }
  if(hasClass(e, "js-decrement")){
    actions.decrement(state.count);
  }
}, false);
