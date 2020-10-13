import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd';
import { _addCarousel } from '@/api/carousel';

class Add extends Component {
  state = {
    fields: {
      tit: "",
      img: "",
      type: 0
    }
  }
  async onFinish(vals) {
    console.log(vals)
    const result = await _addCarousel(vals);
    console.log(result)
  }
  render() {
    const { fields } = this.state;
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
        <Input placeholder="请输入标题" />
      </Form.Item>
      <Form.Item
        label="图片"
        name="img"
        rules={[{ required: true, message: 'Please input your image!' }]}
      >
        <Input placeholder="请输入图片地址" />
      </Form.Item>
      <Form.Item
        label="类型"
        name="type"
        rules={[{ required: true, message: 'Please select images type!' }]}
      >
        <Select>
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

    </Form >
  }
}
export default Add;