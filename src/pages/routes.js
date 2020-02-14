import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './../pages/Main';
import CustermerPage from './../pages/Custermer';
import NotfoundPage from './../pages/Notfound';

export default () => 
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/client" component={CustermerPage} />
      <Route exact path="/*" component={NotfoundPage} />
    </Switch>
  </BrowserRouter>