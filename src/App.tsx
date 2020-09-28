import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './store';
import Navigator from './navigator';
import theme from './theme';

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  </Provider>
);

export default App;
