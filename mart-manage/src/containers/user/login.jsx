import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
// import { _login } from '@/api/user';
import { withCookies } from 'react-cookie';
import { connect } from 'dva';


@withCookies
@connect((store) => {
  return store
})
class Login extends Component {
  state = {
    layout: {
      labelCol: { md: { span: 8 } },
      wrapperCol: { md: { span: 16 } },
    },
    tailLayout: {
      wrapperCol: { md: { offset: 8, span: 16 } },
    }
  }
  async onFinish(account) {
    this.props.dispatch({ type: "user/login", payload: account })
  }
  render() {
    return (
      <>
        this is login
        <Row className="mt25">
          <Col xs={24} sm={24} md={{ span: 12, offset: 6 }} lg={10}>
            <Form
              {...this.state.layout}
              name="basic"
              initialValues={{ username: 'haonan', password: '123321' }}
              onFinish={(account) => this.onFinish(account)}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...this.state.tailLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

// export default withCookies(connect((store) => {
//   return store
// })(Login));

export default Login;
