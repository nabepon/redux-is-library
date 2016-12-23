var App = (function(){
  var Class = function(){ this.init.apply(this, arguments) };

  Class.prototype = {
    init: function(){
      this.store = Redux.createStore(reducer, {});
      this.el = document.querySelector('#app');
    },
    counterPage: function(){
      const component = new Component(this.store);
      this.el.appendChild( component.mount() );
    }
  };

  return Class;
})();

var app = new App();
