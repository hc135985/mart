import React, { Component } from 'react';
import { Button, Space, Form, Modal, Table, message } from 'antd'
import { _getorderList, _orderAdd, _orderupdata } from '@/api/order'
import { order_fields, order_fromItem } from '@/config/from'
import FromItem from '@/component/FromItem'

class Order extends Component {
    state = {
        visible: false,
        addressList: [],
        type: '',
        columns: [
            {
                title: '列表',
                dataIndex: 'list',
                key: 'list',
                render: text => <b>{text}</b>,
            },
            {
                title: 'aid',
                dataIndex: 'aid',
                key: 'aid',
                render: text => <b>{text}</b>,
            },
            {
                title: 'uid',
                dataIndex: 'uid',
                key: 'uid'
            },
            {
                title: '总金额',
                dataIndex: 'summary',
                key: 'summary',
            },
            {
                title: '数量',
                dataIndex: 'total',
                key: 'total',
            },
            {
                title: '订单状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type='default'
                            onClick={() => this.updata(record)}
                        >编辑</Button>
                    </Space>
                ),
            },
        ],
        oid: '',
        formItem: order_fromItem,
        fields: order_fields
    }
    updata(record) {
        let action = []
        this.state.fields.forEach(e => {
            let obj = {}
            obj.name = e.name;
            obj.value = record[e.name]
            action.push(obj)
        })
        this.setState({
            visible: true,
            type: 'updata',
            fields: action,
            oid: record.oid
        })
    }
    add() {
        this.setState({
            visible: true,
            type: 'add',
            fields: order_fields
        })
    }
    async getaddressList() {
        let result = await _getorderList()
        if (result.data.code) {
            this.setState({
                addressList: result.data.result
            })
        }
    }
    componentDidMount() {
        this.getaddressList()
    }
    handleOk = async () => {
        let is = this.state.fields.every(e => e.value !== '')
        if (!is) return alert('请完善信息');
        let action = {}
        this.state.fields.forEach(e => {
            action[e.name] = e.value
        })
        if (this.state.type === 'add') {
            let result = await _orderAdd(action)
            if (result.data.code) {
                message.success(result.data.msg, 1, () => {
                    this.getaddressList()
                })
            }
        } else {
            action.oid = this.state.oid;
            let result = await _orderupdata(action)
            if (result.data.code) {
                message.success(result.data.msg, 1, () => {
                    this.getaddressList()
                })
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
                <h2>
                    订单管理
                   <Button type='primary'
                        onClick={() => {
                            this.add()
                        }}
                    >+ 添加订单
                    </Button>
                </h2>
                {
                    this.state.addressList.length > 0 ?
                        <Table columns={this.state.columns}
                            dataSource={this.state.addressList}
                            pagination={{ pageSize: 6 }}
                            rowKey={'oid'}
                        />
                        : <h2>暂无数据</h2>
                }
                <Modal
                    className='order-modal'
                    title="订单添加"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form name="time_related_controls"
                        fields={this.state.fields}
                        onFieldsChange={(changedFields, allFields) => {
                            this.setState({
                                fields: allFields
                            })
                        }}
                        onFinish={this.onFinish}>
                        <FromItem formItem={this.state.formItem} />

                    </Form>
                </Modal>
            </>
        );
    }
}

export default Order;