import React, { Component } from 'react'
import { Menu, Button } from 'antd';
import { NavLink } from 'dva/router';
import { menuConfig } from '@/config/menu';


class Slider extends Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <div className="slider-wraper clearfix">
        <div className="slider-left">
          <Menu
            className="wf hf"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {
              menuConfig.map(menu => {
                return <SubMenu key={menu.key} title={menu.title} icon={menu.icon}>
                  {
                    menu.children && menu.children.map((subMenu) => {
                      return <Menu.Item key={subMenu.key}>
                        <NavLink to={subMenu.path}>{subMenu.title}</NavLink>
                      </Menu.Item>
                    })
                  }
                </SubMenu>
              })
            }
          </Menu>
        </div>
        <div className="slider-right">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Slider