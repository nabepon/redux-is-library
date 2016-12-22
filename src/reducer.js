import { combineReducers } from 'redux';
import counter from './Actions';

/**
 * state構造を定義する。
 * stateの種類を増やしたい場合はここに追加していく。
 * store.getState().counter が使えるようになるための処理がここ。
 */
export default combineReducers({
  counter,
});
