import React, { Component } from 'react';
import { Button, Space, Table, Popconfirm, Modal, Form, message } from 'antd'
import { comment_fields, comment_fromItem } from '@/config/from'

import { _getCommentAll, _commentAdd, _commentdel } from '@/api/comment'
import FromItem from '@/component/FromItem'

class Comment extends Component {
    state = {
        visible: false,
        commentList: [],
        columns: [
            {
                title: '商品id',
                dataIndex: 'pid',
                key: 'pid',
                render: text => <b>{text}</b>,
            },
            {
                title: '用户id',
                dataIndex: 'uid',
                key: 'uid',
                render: text => <b>{text}</b>,
            },
            {
                title: '评论用户',
                dataIndex: 'uname',
                key: 'uname',
                sorter: (a, b) => a.sale_price - b.sale_price
            },
            {
                title: '评论内容',
                dataIndex: 'comment',
                key: 'comment',
            },
            {
                title: '星级',
                dataIndex: 'score',
                key: 'score',
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
        formItem: comment_fromItem,
        fields: comment_fields
    }
    async getAll() {
        let result = await _getCommentAll()
        if (result.data.code) {
            this.setState({
                commentList: result.data.result
            })
        }
    }
    componentDidMount() {
        this.getAll()
    }
    confirm = async record => {
        let result = await _commentdel(record.cid)
        if (result.data.code) {
            message.success(result.data.msg, 1, () => {
                this.getAll()
            })
        }
    }
    handleOk = async () => {
        let is = this.state.fields.every(e => e.value !== '')
        if (!is) return alert('请完善信息');

        let action = {}
        this.state.fields.forEach(e => {
            action[e.name] = e.value
        })

        let result = await _commentAdd(action)
        if (result.data.code) {
            message.success(result.data.msg, 1, () => {
                this.getAll()
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
    add() {

        this.setState({
            visible: true,
            fields: comment_fields
        })
    }
    render() {
        return (
            <>
                <h2>评论列表
                   <Button type='primary'
                        onClick={() => {
                            this.add()
                        }}
                    >+ 添加评论</Button>
                </h2>
                {
                    this.state.commentList.length > 0 ?
                        <Table columns={this.state.columns}
                            dataSource={this.state.commentList}
                            pagination={{ pageSize: 6 }}
                            rowKey={'cid'}
                        />
                        : ''
                }
                <Modal
                    className='comment-modal'
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
                        onFinish={this.onFinish}>
                        <FromItem formItem={this.state.formItem} />
                    </Form>
                </Modal>
            </>
        );
    }
}

export default Comment;