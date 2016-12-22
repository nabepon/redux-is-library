import React, { Component, PropTypes } from 'react';
import PresentationalComponent from './PresentationalComponent';
import { connect } from 'react-redux';
import * as Actions from './Actions';

class ContainerComponent extends Component {
  static propTypes = {
    increment: PropTypes.func,
    count: PropTypes.number,
  };

  render() {
    return <PresentationalComponent {...this.props}/>;
  }
}

const mapStateToProps = state => ({
  ...state.ActionReducer,
});

export default connect(mapStateToProps, Actions)(ContainerComponent);
