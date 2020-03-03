import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import MainPage from './../pages/Main';
import AdminPage from './../pages/admin';
import CustermerPage from './../pages/Custermer';
import NotfoundPage from './../pages/Notfound';

export default () => { 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route> 
        <Route exact path="/reschiza.admin/app"><AdminPage /></Route>
        <Route exact path="/client"><CustermerPage /></Route>
        <Route exact path="/*" component={NotfoundPage} />
      </Switch>
    </BrowserRouter>
  )
}