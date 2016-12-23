var Component = (function(){
  var Class = function(){ this.init.apply(this, arguments) };

  Class.prototype = {
    /**
     * storeとactionを他メソッドから参照できるよう自身に追加する
     * またrenderとhandlerのthis参照が変わってしまうのでbindしておく
     */
    init: function(store){
      this.store = store;
      this.actions = utils.mapDispatchToActions(this.store, Actions);
      this.render = this.render.bind(this);
      this.handler = this.handler.bind(this);
    },

    /**
     * Componentを追加する処理
     * actionを実行した時にrenderが走るよう、storeの変更を監視する
     * 自身のelementを作成し、イベントハンドラをaddEventListenerする
     * returnした自身のelementは、mountの呼び出し元でdom構築に使う
     */
    mount: function(){
      this.unsubscribe = this.store.subscribe(this.render);
      this.el = document.createElement("div");
      this.el.addEventListener("click", this.handler, false);
      this.render();
      return this.el;
    },

    /**
     * Componentを削除する処理
     * removeEventListenerし、自身のelementを削除する
     */
    unmount: function() {
      this.unsubscribe();
      this.el.removeEventListener("click", this.handler, false);
      this.el.parentNode.removeChild(this.el);
    },

    /**
     * イベントハンドラ
     * 要素ごとにaddEventListenerは大変なのでしない
     * mountのthis.el.addEventListenerで一括制御する
     */
    handler: function(e) {
      var state = this.store.getState().counter;
      if(utils.hasClass(e, "js-increment")){
        this.actions.increment(state.count);
      }
      if(utils.hasClass(e, "js-decrement")){
        this.actions.decrement(state.count);
      }
    },

    /**
     * html文字列を生成し、自身を書き換える関数
     * ここに他Componentを追加したい場合、mount関数内で
     * this.child = new ChildComponent().mount();
     * のようにインスタンスを作っておき、this.el.innerHTMLの後に
     * this.el.querySelector('.childContainer').appendChild(this.child)
     * のような追加処理を書く
     */
    render() {
      var state = this.store.getState().counter;
      this.el.innerHTML = '\
        <div>' + state.count + '</div>\
        <button class="js-increment">increment</button>\
        <button class="js-decrement">decrement</button>\
      ';
    }
  };

  return Class;
})();
