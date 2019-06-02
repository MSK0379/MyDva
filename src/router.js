/*
 * @Author: MSK 
 * @Date: 2019-06-02 18:56:47 
 * @Last Modified by: MSK
 * @Last Modified time: 2019-06-02 19:05:31
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
