import React, { Component } from 'react';
import { Form, Select, Input } from 'antd'
class FromItem extends Component {
    sele = e => {
        console.log(e)
    }
    render() {
        const { Option } = Select
        return (
            <>
                {
                    this.props.formItem.map(formitem => {
                        if (formitem.isSelect) {
                            return <Form.Item
                                key={formitem.tit + Math.random().toString(16)}
                                label={formitem.tit}
                                name={formitem.name}
                                rules={[{ required: true, message: formitem.msg }]}
                            >
                                <Select
                                    onChange={this.props.sele ? this.props.sele : this.sele}
                                >
                                    {
                                        formitem.opn.map(opnItem => {
                                            return <Option value={opnItem.value} key={opnItem.value + Math.random().toString(16)}>
                                                {opnItem.text}
                                            </Option>
                                        })
                                    }
                                </Select>
                            </Form.Item>
                        } else {
                            return <Form.Item
                                key={formitem.tit + 'fromItem'}
                                label={formitem.tit}
                                name={formitem.name}
                                rules={[{ required: true, message: formitem.msg }]}
                            >
                                <Input />
                            </Form.Item>
                        }
                    })
                }
            </>
        );
    }
}

export default FromItem;