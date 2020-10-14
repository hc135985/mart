import React, { Component } from 'react';
import {
    _getproductone, _ProductTypeAdd, _ProductTypeEdit
    , _ProductTypeDel
} from '@/api/product'
import { Button, Table, Popconfirm, Modal, Form, message } from 'antd'
import { productone_fields, productone_fromItem } from '@/config/from'
import FromItem from '@/component/FromItem'

class Productone extends Component {
    state = {
        visible: false,
        productoneList: [],
        fields: JSON.parse(JSON.stringify(productone_fields)),
        formItem: JSON.parse(JSON.stringify(productone_fromItem)),
        type: '',
        tid: '',
        t_type: '',
        columns: [
            {
                title: '一级列表名称',
                dataIndex: 't_text',
                key: 't_text',
                render: text => <b>{text}</b>,
            },
            {
                title: '列表type',
                dataIndex: 't_type',
                key: 't_type',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <p>
                        <Button type='primary'
                            onClick={() => this.edit(record)}
                        >编辑</Button>
                        <Popconfirm
                            title="是否删除"
                            onConfirm={() => this.confirm(record)}
                            okText="是"
                            cancelText="否"
                        >
                            <Button type='default'
                            >删除</Button>
                        </Popconfirm>
                    </p>
                )
            }
        ]
    }
    confirm = async (record) => {
        let res = await _ProductTypeDel({ tid: record.tid })
        if (res.data.code) {
            message.success(res.data.msg, 1)
            this.getproductone()
        } else {
            message.error(res.data.msg)
        }
    }
    add() {
        this.setState({
            type: 'add',
            visible: true,
            fields: JSON.parse(JSON.stringify(productone_fields))
        })
    }
    edit(record) {
        let data = JSON.parse(JSON.stringify(this.state.fields))
        data.forEach(e => {
            e.value = record[e.name]
        })
        this.setState({
            type: 'edit',
            visible: true,
            tid: record.tid,
            fields: data,
            t_type: record.t_type
        })
    }
    async getproductone() {
        let data = JSON.parse(JSON.stringify(this.state.formItem))
        let res = await _getproductone()
        this.setState({
            productoneList: res.data.result,
            formItem: data
        })
    }

    componentDidMount() {
        this.getproductone()
    }
    handleOk = async (e) => {
        if (this.state.type === 'add') {
            e.t_type = this.state.productoneList.length
            _ProductTypeAdd(e).then(res => {
                if (res.data.code) {
                    message.success(res.data.msg, 1)
                    this.getproductone()
                } else {
                    message.error(res.data.msg)
                }
            }
            ).catch(err => { })

        } else {
            e.tid = this.state.tid
            e.t_type = this.state.t_type
            let res = await _ProductTypeEdit(e)
            if (res.data.code) {
                message.success(res.data.msg, 1)
                this.getproductone()
            } else {
                message.error(res.data.msg)
            }
        }
        this.setState({
            visible: false
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <>
                <h2>商品一级列表
                   <Button type='primary'
                        onClick={() => {
                            this.add()
                        }}
                    >+ 添加一级列表</Button>
                </h2>
                {
                    this.state.productoneList.length > 0 ?
                        <Table columns={this.state.columns}
                            dataSource={this.state.productoneList}
                            pagination={{ pageSize: 6 }}
                            rowKey={() => {
                                return Math.random().toString(16)
                            }}
                        />
                        : ''
                }
                <Modal
                    className='order-modal'
                    title={this.state.type === 'add' ? '添加' : '编辑'}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    closable={true}
                    footer={false}
                >
                    <Form name="time_related_controls"
                        fields={this.state.fields}
                        onFinish={this.handleOk}>
                        <FromItem formItem={this.state.formItem} />
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                确认
                               </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default Productone;