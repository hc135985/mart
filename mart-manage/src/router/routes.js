/*
 * @Author: heinan 
 * @Date: 2020-09-09 09:38:44 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-16 08:32:05
 */
import App from '@/App';
import Login from '@/containers/user/login';
import UploadAvatar from '@/containers/user/upload';
import Carousel from '@/containers/carousel';

export default [{
  path: '/app',
  name: 'app',
  component: App,
  children: [{
    path: "/app/carousel",
    name: "carousel",
    oauth: true,
    component: Carousel
  },
  {
    path: "/app/upload",
    name: "upload",
    component: UploadAvatar
  }]
}, {
  path: "/user/login",
  name: "login",
  component: Login
}]