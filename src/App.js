import React, { Component } from 'react';
import './resources/scss/styles.css';
import Header from './containers/header';
import Series from './containers/series';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './overridingMIStyles.jsx';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header/>
          <Series/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
