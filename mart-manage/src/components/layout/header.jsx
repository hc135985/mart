import React, { Component } from 'react'
import { connect } from 'dva';
import { Avatar } from 'antd';

@connect((store) => store.user)
class Header extends Component {
  componentDidMount() {
    this.getUserInof();
  }
  async getUserInof() {
    const { dispatch, token } = this.props;
    await dispatch({ type: "user/getIdByToken", payload: token })
    dispatch({ type: "user/getUserById", payload: this.props.uid })
  }
  render() {
    const { userInfo } = this.props;
    return (
      <div className="header bdb1 clearfix">
        <div className="float-right mt15 mr15">
          <Avatar className="mlr5" src={userInfo.avatar} />
          <span>{userInfo.nickname}</span>
        </div>
        <div className="pl15">{this.props.children}</div>
      </div>
    )
  }
}
export default Header