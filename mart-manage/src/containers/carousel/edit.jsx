import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd';
import { _editCarouselById } from '@/api/carousel';

export default class componentName extends Component {
  async onFinish(vals) {
    vals = Object.assign(this.props.fields, vals, { type: this.state.type })
    const result = await _editCarouselById(vals);
    this.props.handler(result.data)
  }
  state = {
    type: 0
  }
  handlerChange(val, opt) {
    this.setState({
      type: val
    })
  }
  render() {
    const { fields } = this.props;
    return <Form
      name="basic"
      initialValues={fields}
      onFinish={(vals) => this.onFinish(vals)}
    >
      <Form.Item
        label="标题"
        name="tit"
        rules={[{ required: true, message: 'Please input your title!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="图片"
        name="img"
        rules={[{ required: true, message: 'Please input your image!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="类型"
        rules={[{ required: true, message: 'Please select images type!' }]}
      >
        <Select value={this.state.type === null ? fields.type : this.state.type} onChange={(val, opt) => this.handlerChange(val, opt)}>
          <Select.Option value={1}>上架</Select.Option>
          <Select.Option value={0}>未上架</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary">
          取消
    </Button>
        <Button type="primary" htmlType="submit">
          确认
        </Button>
      </Form.Item>
    </Form>
  }
}
