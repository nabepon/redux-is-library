import {mapDispatchToActions, hasClass} from './utils';
import * as Actions from './Actions';

export default class Component {
  constructor(_store) {
    this.store = _store;
    this.actions = mapDispatchToActions(this.store, Actions);
    this.render = this.render.bind(this);
    this.handler = this.handler.bind(this);
  }

  mount() {
    this.unsubscribe = this.store.subscribe(this.render);
    this.el = document.createElement("div");
    this.el.addEventListener("click", this.handler, false);
    this.render();
    return this.el;
  }

  unmount() {
    this.unsubscribe();
    this.el.removeEventListener("click", this.handler, false);
    this.el.parentNode.removeChild(this.el);
  }

  handler(e) {
    const state = this.store.getState().counter;
    if(hasClass(e, "js-increment")){
      this.actions.increment(state.count);
    }
    if(hasClass(e, "js-decrement")){
      this.actions.decrement(state.count);
    }
  }

  render() {
    const state = this.store.getState().counter;
    this.el.innerHTML = `
      <div>${state.count}</div>
      <button class="js-increment">increment</button>
      <button class="js-decrement">decrement</button>
    `;
  }
}
