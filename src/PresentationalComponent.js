import React, { Component } from 'react';

export default class PresentationalComponent extends Component {
  render() {
    const {
      increment,
      decrement,
      count
    } = this.props;

    return (
      <div>
        <div>{count}</div>
        <button onClick={() => ( increment(count) )}>increment</button>
        <button onClick={() => ( decrement(count) )}>decrement</button>
      </div>
    );
  }
}
