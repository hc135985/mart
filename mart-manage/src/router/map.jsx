/*
 * @Author: heinan 
 * @Date: 2020-09-09 09:35:59 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-11 11:28:30
 */

import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

class RouterMap extends Component {
  render() {
    const { history, routes } = this.props;
    const defaultRoute = <Redirect from="/" to="/app" key={'default'} exact ></Redirect>;
    return <Router history={history}>
      <Switch>
        {
          routes.map((item, index) => {
            const children = item.children === undefined ? [] : item.children;
            const Comp = item.component;
            return <Route key={item.name} path={item.path} component={() => {
              return <Comp routes={children} history={history}></Comp>
            }} />
          }).concat([defaultRoute])
        }

      </Switch>
    </Router>
  }
}

export default RouterMap;
