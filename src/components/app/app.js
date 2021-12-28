import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import Background from './bg2.jpg';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div style={{background: `url(${Background}) right center/cover no-repeat`, minHeight: '100vh'}} className="app">
        <AppHeader />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/cart'  component={CartPage} />
          <Route path='/:id' component={ItemPage} />
        </Switch>
    </div>
  )
}

export default App;