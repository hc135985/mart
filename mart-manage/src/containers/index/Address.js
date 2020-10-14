import React, { Component } from 'react';
import { Button, Space, Popconfirm, Form, Modal, Table, message } from 'antd'
import { _getaddressList, _addressAdd, _addressdel } from '@/api/address'
import { Address_fields, Address_fromItem } from '@/config/from'
import FromItem from '@/component/FromItem'

class Address extends Component {
    state = {
        visible: false,
        addressList: [],
        columns: [
            {
                title: '姓名',
                dataIndex: 'auser',
                key: 'auser',
                render: text => <b>{text}</b>,
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile',
                render: text => <b>{text}</b>,
            },
            {
                title: '省份',
                dataIndex: 'province',
                key: 'province'
            },
            {
                title: '市',
                dataIndex: 'city',
                key: 'city',
            },
            {
                title: '区县',
                dataIndex: 'county',
                key: 'county',
            },
            {
                title: '街道门牌',
                dataIndex: 'street',
                key: 'street',
            },
            {
                title: '用户id',
                dataIndex: 'uid',
                key: 'uid',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Popconfirm
                            title="是否删除"
                            onConfirm={() => this.confirm(record)}
                            okText="是"
                            cancelText="否"
                        >
                            <Button type='default'>删除</Button>
                        </Popconfirm>
                    </Space>
                ),
            },
        ],
        formItem: Address_fromItem,
        fields: Address_fields
    }
    add() {
        this.setState({
            visible: true,
            fields: Address_fields
        })
    }
    async getaddressList() {
        let result = await _getaddressList()
        if (result.data.code) {
            this.setState({
                addressList: result.data.result
            })
        }
    }
    async  confirm(record) {
        let result = await _addressdel(record.aid)
        if (result.data.code) {
            message.success(result.data.msg, 1, () => {
                this.getaddressList()
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
        let result = await _addressAdd(action)
        if (result.data.code) {
            message.success(result.data.msg, 1, () => {
                this.getaddressList()
            })
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
                <h2>地址管理
               <Button type='primary'
                        onClick={() => {
                            this.add()
                        }}
                    >+ 地址订单</Button>
                </h2>
                {
                    this.state.addressList.length > 0 ?
                        <Table columns={this.state.columns}
                            dataSource={this.state.addressList}
                            pagination={{ pageSize: 6 }}
                            rowKey={'aid'}
                        />
                        : <h2>暂无数据</h2>
                }
                <Modal
                    className='city-modal'
                    title="地址添加"
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
                        <FromItem formItem={this.state.formItem} />              </Form>
                </Modal>
            </>
        );
    }
}

export default Address;