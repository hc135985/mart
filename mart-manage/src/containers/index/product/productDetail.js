import React, { Component } from 'react';
import { Button, Popconfirm } from 'antd'
import { _getproduct, _ProductUpdata, _ProductDelete, _getproducttwo, _getproductone } from '@/api/product'
import { withRouter } from 'dva/router'
import { Form, Modal, message } from 'antd'
import { product_fromItem, product_fields } from '@/config/from'
import FromItem from '@/component/FromItem'

@withRouter
class productDetail extends Component {
    state = {
        item: [],
        visible: false,
        formItem: [...product_fromItem],
        fields: JSON.parse(JSON.stringify(product_fields))
    }
    async getProductList() {
        let result = await _getproduct(this.props.location.state.pid)
        if (result.data.code) {
            this.getsortList(result.data.result[0].t_type)
            this.setState({
                item: result.data.result
            })
        }
    }
    async getsortList(t_type) {
        try {
            let result = await _getproducttwo({ t_type })
            let data = this.state.formItem;
            data.forEach(e => {
                if (e.name === 's_type') {
                    e.opn = result.data.result.map(e => {
                        return { value: e.s_type, text: e.s_text }
                    });
                }
            })
            let newFields = JSON.parse(JSON.stringify(this.state.fields))
            newFields.forEach(e => {
                if (e.name[0] === 's_type') {
                    e.value = data[7].opn[0].text
                }
            })
            console.log(data);
            this.setState({
                fields: newFields,
                formItem: data
            })
        } catch (error) {

        }

    }
    sele(e) {
        this.getsortList(e)
    }
    async getproductone() {
        try {
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
                formItem: data,
            })
        } catch (error) {

        }

    }
    componentDidMount() {
        this.getProductList()
        this.getproductone()
    }
    confirm = async e => {
        let result = await _ProductDelete(this.state.item[0].pid)
        if (result.data.code) {
            message.success(result.data.msg, 1, () => {
                this.props.history.push('/index/productlist')
            })
        }
    }
    handleOk = async e => {
        let isF = this.state.fields.every(e => {
            return e.value === this.state.item[0][e.name]
        })

        if (!isF) {
            let action = {}
            this.state.fields.forEach(e => {
                action[e.name] = e.value
            })
            action['pid'] = this.state.item[0].pid
            let result = await _ProductUpdata(action)
            if (result.data.code) {
                message.success(result.data.msg, 1, () => {
                    this.getProductList()
                })
            }
        }
        this.setState({
            visible: false,
        });

    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    productUpdata = () => {
        let data = this.state.fields
        data.forEach(e => {
            e.value = this.state.item[0][e.name]
        })
        console.log(data);
        this.setState({
            visible: true,
            fields: data
        });
    }
    render() {

        return (
            <>
                <h2>商品详情
                <Popconfirm
                        title="是否删除"
                        onConfirm={this.confirm}
                        okText="是"
                        cancelText="否"
                    >
                        <Button type='default'>删除</Button>
                    </Popconfirm>
                    <Button type='primary'
                        onClick={this.productUpdata}
                    >
                        编辑
                    </Button>
                </h2>
                <Modal
                    title="商品添加"
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
                        {...this.state.formItemLayout} onFinish={this.onFinish}>
                        <FromItem formItem={this.state.formItem} sele={(e) => { this.sele(e) }} />
                    </Form>
                </Modal>
                {
                    this.state.item.map(e => {
                        return <div key={e.pid + 'del'}>
                            <p>商品名称：{e.pname}</p>
                            <p>原价：{e.original_price}</p>
                            <p>现价：{e.sale_price}</p>
                            <p>模式：{e.mode}</p>
                            <p>简介{e.desc}</p>
                        </div>
                    })
                }
            </>
        );
    }
}

export default productDetail;