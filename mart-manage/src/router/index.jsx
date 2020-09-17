/*
 * @Author: heinan 
 * @Date: 2020-09-09 09:32:42 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-09 09:54:39
 */
import React from 'react';
import RouterMap from './map';
import Routes from './routes';

const RouterView = function (props) {
  const routes = props.routes ? props.routes : Routes;
  return <RouterMap routes={routes} {...props}></RouterMap>
}
export default RouterView;