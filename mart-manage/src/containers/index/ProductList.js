import React, { Component } from 'react';
import { Button, Table, Space, Modal, Form, message } from 'antd'
import { _getProductList, _ProductAdd, _searchByType, _getproducttwo, _getproductone } from '@/api/product';
import { product_fromItem, product_fields } from '@/config/from'
import { connect } from 'dva'
import FromItem from '@/component/FromItem'

class ProductList extends Component {
    selectProduct = null;
    state = {
        columns: [
            {
                title: '商品信息',
                dataIndex: 'pname',
                key: 'pname',
                render: text => <b>{text}</b>,
            },
            {
                title: '价格',
                dataIndex: 'sale_price',
                key: 'sale_price',
                sorter: (a, b) => a.sale_price - b.sale_price
            },
            {
                title: '销量',
                dataIndex: 'sales',
                key: 'sales',
            },
            {
                title: '模式',
                dataIndex: 'mode',
                key: 'mode',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type='primary'
                            onClick={() => { this.del(text) }}
                        >编辑</Button>
                    </Space>
                ),
            },
        ],
        productlist: [],
        visible: false,
        fields: JSON.parse(JSON.stringify(product_fields)),
        formItem: [...product_fromItem]
    }
    handleOk = async e => {
        try {
            let result = await _ProductAdd(e)
            if (result.data.code) {
                message.success(result.data.msg, 1, () => {
                    this.getProductList()
                    this.setState({
                        visible: false,
                    });
                })
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    del(text) {
        this.props.history.push('/index/productDetail', {
            pid: text.pid
        })

    }
    async getProductList() {
        try {
            let result = await _getProductList()
            if (result.data.code) {
                this.setState({
                    productlist: result.data.result
                })
            }
        } catch (error) {
            console.log(error);
        }

    }
    async getsortList(t_type) {
        let result;
        try {
            result = await _getproducttwo({ t_type })
            let data = this.state.formItem;
            data.forEach(e => {
                if (e.name === 's_type') {
                    e.opn = result.data.result.map(e => {
                        return { value: e.s_type, text: e.s_text }
                    });
                }
            })
            this.setState({
                formItem: data
            })
        } catch (error) {
            console.log(error);
        }

    }

    sele(e) {
        this.getsortList(e)
    }
    async getproductone() {
        let result = await _getproductone();
        let data = this.state.formItem;
        data.forEach(e => {
            if (e.name === 't_type') {
                e.opn = result.data.result.map(e => {
                    return { value: e.t_type, text: e.t_text }
                });
            }
        })
        this.setState({
            formItem: data
        })
    }
    componentDidMount() {
        this.getProductList()
        this.getsortList(0)
        this.getproductone()
    }
    add() {
        this.setState({
            visible: true,
            fields: JSON.parse(JSON.stringify(product_fields))
        })
    }
    async searceP() {
        let result
        try {
            result = await _searchByType(this.selectProduct.value)
            if (result.data.code) {
                this.setState({
                    productlist: result.data.result
                })
            } else {
                this.getProductList()
            }
        } catch (error) {
            console.log(error);
        }

    }
    render() {
        return (
            <>
                <h2>商品列表
                   <Button type='primary'
                        onClick={() => {
                            this.add()
                        }}
                    >+ 添加商品</Button>
                </h2>
                <Modal
                    className='prodict-modal'
                    title="商品添加"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable={true}
                    footer={false}
                >
                    <Form name="time_related_controls"
                        onFinish={this.handleOk}>
                        <FromItem formItem={this.state.formItem} sele={(e) => this.sele(e)} />
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                确认
                               </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <div className='main'>
                    <div className='select'>
                        商品名称 : <input type='text' ref={(e) => { this.selectProduct = e }} placeholder='请输入商品名称' />
                        <Button type='primary'
                            onClick={() => this.searceP()}
                        >查询</Button>
                    </div>
                    {
                        this.state.productlist.length > 0 ?
                            <Table columns={this.state.columns}
                                dataSource={this.state.productlist}
                                rowKey={'pid'}
                                pagination={{ pageSize: 6 }}
                                position={['bottomCenter']}
                            />
                            : ''
                    }
                </div>
            </>
        );
    }
}

export default connect()(ProductList);