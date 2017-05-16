import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../Component/Index.jsx';
/*=================
   router.jsx 组件
  专门用来管理路由的
==================*/

const RouteConfig =(
  <Router history={hashHistory}>
      <Route path='/' component={Index}/>
   </Router>
);
export default RouteConfig
