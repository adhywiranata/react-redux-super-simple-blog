import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header, Content, AddPost, Page404 } from './components';

const styles = {
  container: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
};

const App = () => (
  <BrowserRouter>
    <div style={styles.container}>
      <Header />
      <Route exact path="/" component={Content} />
      <Route path="/add" component={AddPost} />
      <Route path="/404" component={Page404} />
    </div>
  </BrowserRouter>
);

export default App;
