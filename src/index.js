import { createStore } from 'redux';
import reducer from './reducer';
import Component from './Component';

class App {
  constructor(){
    this.store = createStore(reducer, {});
    this.el = document.querySelector('#app');
  }

  counterPage(){
    const component = new Component(this.store);
    this.el.appendChild( component.mount() );
  }
}

window.app = new App();
