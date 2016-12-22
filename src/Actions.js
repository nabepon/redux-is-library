/******************************************
 * 定数
 * switch caseでtype判定するためのお作法
 ******************************************/
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/******************************************
 * Actions
 * stateを変更する関数
 * typeとpayloadはお作法
 ******************************************/
export const increment = (current) => {
  return {
    type: INCREMENT,
    payload: {
      count: current + 1
    },
  }
};

export const decrement = (current) => {
  return {
    type: DECREMENT,
    payload: {
      count: current - 1
    },
  }
};

/******************************************
 * 初期値のお作法
 ******************************************/
const initialState = {
  count: 0
};

/******************************************
 * reducer
 * stateを作成、変更するための薄い関数
 * store.dispatch(increment()) とすることで
 * Actionとreducerが紐づきstateが更新される
 ******************************************/
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        ...payload
      };

    case DECREMENT:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
