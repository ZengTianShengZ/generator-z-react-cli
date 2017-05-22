import React, {Component} from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom'
import Index from '../Component/Index.jsx';
/*=================
   router.jsx 组件
  专门用来管理路由的
==================*/

const RouteConfig =(
  <HashRouter>
      <Route path='/' component={Index}/>
   </HashRouter>
);
export default RouteConfig
