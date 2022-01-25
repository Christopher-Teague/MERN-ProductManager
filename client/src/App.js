import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductView from './views/ProductView';
import ProductUpdate from './views/ProductUpdate';
import './App.css';

function App() {
  return (
    // <BrowserRouter>   ///// moved BrowserRouter to index.js \\\\\
    <div className="App">
      <Switch>

        <Route exact path="/products/:id/edit">
          <ProductUpdate />
        </Route>

        <Route exact path="/products/:id">
          <ProductView />
        </Route>

        <Route path="/products">
          <Main />
        </Route>

      </Switch>
    </div>
    // </BrowserRouter>
  );
}

export default App;
