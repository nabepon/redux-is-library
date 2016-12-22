import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import ContainerComponent from './ContainerComponent.js';

const store = createStore(reducer, {});

render(
  <ContainerComponent store={store}/>,
  document.getElementById('app')
);
