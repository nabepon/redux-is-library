const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


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

const initialState = {
  count: 0
};

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
