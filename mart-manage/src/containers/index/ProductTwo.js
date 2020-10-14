import React, { Component } from 'react';
import {
    _getproducttwo, _getproductone,
    _ProductSortDel, _ProductSortEdit,
    _ProductSortAdd
} from '@/api/product'
import { Button, Table, Popconfirm, Modal, Form, message } from 'antd'
import { productTwo_fields, productTwo_fromItem } from '@/config/from'
import FromItem from '@/component/FromItem'

class ProductTwo extends Component {
    state = {
        visible: false,
        productTwoList: [],
        fields: JSON.parse(JSON.stringify(productTwo_fields)),
        formItem: JSON.parse(JSON.stringify(productTwo_fromItem)),
        type: '',
        s_type: '',
        columns: [
            {
                title: '二级列表名称',
                dataIndex: 's_text',
                key: 's_text',
                render: text => <b>{text}</b>,
            },
            {
                title: '列表type',
                dataIndex: 't_type',
                key: 't_type',
            },
            {
                title: '列表s_type',
                dataIndex: 's_type',
                key: 's_type',
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
        let res = await _ProductSortDel({ s_type: record.s_type })
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
            fields: JSON.parse(JSON.stringify(productTwo_fields))
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
            s_type: record.s_type,
            fields: data,
        })
    }
    async getproductone() {
        let res = await _getproducttwo()
        let result = await _getproductone()

        let data = JSON.parse(JSON.stringify(this.state.formItem))
        data[1].opn = []
        result.data.result.forEach(e => {
            let obj = {
                value: e.t_type,
                text: e.t_text
            }
            data[1].opn.push(obj)
        })
        this.setState({
            productTwoList: res.data.result,
            formItem: data
        })
    }

    componentDidMount() {
        this.getproductone()
    }
    handleOk = async (val) => {
        if (this.state.type === 'add') {
            val.s_type = this.state.productTwoList.length
            _ProductSortAdd(val).then(res => {
                if (res.data.code) {
                    message.success(res.data.msg, 1)
                    this.getproductone()
                } else {
                    message.error(res.data.msg)
                }

            })
        } else {
            val.s_type = this.state.s_type
            let res = await _ProductSortEdit(val)
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
                <h2>商品二列表
                   <Button type='primary'
                        onClick={() => {
                            this.add()
                        }}
                    >+ 添加二级列表</Button>
                </h2>
                {
                    this.state.productTwoList.length > 0 ?
                        <Table columns={this.state.columns}
                            dataSource={this.state.productTwoList}
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

export default ProductTwo;