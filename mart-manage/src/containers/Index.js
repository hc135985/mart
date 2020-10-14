import React, { Component } from 'react';
import { NavLink } from 'dva/router'
import RouterView from '../router';
import { Avatar, Dropdown, Menu, Button } from 'antd';
import indexMenu from '../config/menu'
import {
    DownOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { _getUserIdByToken, _getUserByToken, _getUserInfoByUid } from '@/api/user'

class Index extends Component {
    state = {
        flag: false,
        msg: localStorage.getItem('msg') || '首页banner',
        item: {},
        collapsed: false,
        menu: (<Menu>
            <Menu.Item onClick={() => this.logOut()}
                style={{ padding: 10, fontSize: 18 }}>
                <span  >退出登录</span>
            </Menu.Item>
        </Menu>)
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    logOut() {
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }
    async getuser() {
        let res = await _getUserIdByToken(localStorage.getItem('token'))
        if (res.data.userp && res.data.userp[0]['identity_type'] === 0) return;
        this.props.history.push('/wq')
    }

    componentDidMount() {
        this.getuser()
        this.getuserInfo()
    }
    async getuserInfo() {
        let res = await _getUserByToken(localStorage.getItem('token'))
        let result = await _getUserInfoByUid(res.data.uid)
        this.setState({
            item: result.data.data
        })
    }
    setMsg(str) {
        localStorage.setItem('msg', str)
        this.setState({
            msg: str
        })
    }
    render() {
        const { SubMenu } = Menu;
        let { item, menu } = this.state
        return (
            <div className='index'>
                <div className='header'>
                    <h3 style={{ float: 'left', paddingLeft: 50 }}>后台管理</h3>
                    <span style={{ float: 'right', margin: "5px  60px", fontSize: 20, lineHeight: '50px', fontWeight: 800 }}>
                        <Dropdown overlay={menu}
                        >
                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}
                                style={{
                                    marginRight: 30,
                                    marginTop: '-10px'
                                }}
                            >
                                <Avatar size={36} src={item.avatar} />
                                <DownOutlined style={{ fontSize: 16, color: '#000', marginLeft: 10 }} />
                            </span>
                        </Dropdown>

                        {item.nickname}
                    </span>
                </div>
                <div className='index-main'>
                    <div className='left'>
                        <div style={{ width: 240 }}>
                            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >
                                {
                                    indexMenu.map(menu => {
                                        return <SubMenu key={menu.key} icon={menu.icon} title={menu.title}
                                        >
                                            {
                                                menu.children && menu.children.map(subMenu => {
                                                    return <Menu.Item key={subMenu.key}
                                                        onClick={() => {
                                                            this.setMsg(menu.title + ' / ' + subMenu.title)
                                                        }}
                                                    >
                                                        <NavLink to={subMenu.path}
                                                            icon={subMenu.icon}>
                                                            {subMenu.title}
                                                        </NavLink>
                                                    </Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    })
                                }
                            </Menu>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='cd'>后台管理  / {this.state.msg}   </div>
                        <RouterView routes={this.props.routes} history={this.props.history} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;