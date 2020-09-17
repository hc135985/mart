/*
 * @Author: heinan 
 * @Date: 2020-09-15 14:44:47 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-16 08:25:03
 */
import React from 'react';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

export const menuConfig = [
  {
    key: "menu-1-1",
    title: "首页管理",
    icon: <MailOutlined />,
    children: [
      {
        key: "menu-1-1-1",
        title: "轮播图管理",
        path: "/app/carousel",
        icon: <ContainerOutlined />
      },
      {
        key: "menu-1-1-2",
        title: "商品管理",
        path: "/app/carousel",
        icon: <PieChartOutlined />
      }
    ]
  }, {
    key: "menu-1-2",
    title: "设置用心",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "menu-1-2-1",
        title: "图片上传",
        path: "/app/upload",
        icon: <ContainerOutlined />
      },
      {
        key: "menu-1-2-2",
        title: "首页管理",
        path: "/app/carousel",
        icon: <MailOutlined />
      }
    ]
  }
]
