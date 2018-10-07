import React, { Component } from 'react';
import Header from './common/header/Header'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
      </Provider>
    );
  }
}

export default App;
