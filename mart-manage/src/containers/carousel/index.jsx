/*
 * @Author: heinan 
 * @Date: 2020-09-11 10:41:24 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-15 10:25:38
 */
import React, { Component } from 'react';
import { _getCarouselList, _delCarousel } from '@/api/carousel';
import { Table, Tag, Space, Modal, Button, message, Popconfirm } from 'antd';
import Edit from './edit';
import Add from './add';

class Carousel extends Component {

  state = {
    visible: false,
    show: {
      title: "添加",
      type: "add"
    },
    finished: true,
    top: 'topLeft',
    bottom: 'bottomRight',
    carouselList: [],
    fields: {},
    columns: [
      {
        title: '标题',
        dataIndex: 'tit',
        key: 'tit',
      },
      {
        title: '图片',
        dataIndex: 'img',
        key: 'img',
        render: (text, record) => {
          return <span className="text-nobr block" style={{ width: '500px' }}>{text}</span>
        }
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        render: (text, record) => {
          return <span>{text ? "上架" : "未上架"}</span>
        }
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <span onClick={() => this.edit(record)}>编辑</span>
            <Popconfirm
              placement="topRight"
              title={'你确定删除这条记录吗？'}
              onConfirm={() => this.confirm(text)}
              okText="Yes"
              cancelText="No"
            >
              <span>删除 </span>
            </Popconfirm>

          </Space>
        ),
      },
    ]
  }
  componentDidMount() {
    this.getCarouselList()
  }
  async confirm({ cid }) {

    const result = await _delCarousel(cid)
    if (result.data.code) {
      message.success(`${cid} 这条记录已经删除拉！`, 1);
      this.getCarouselList()
    } else {
      message.error(`删除失败！`)
    }
  }

  add() {
    console.log(111)
    this.setState({
      visible: true,
      show: {
        title: "添加",
        type: "add"
      }
    });
  }
  edit(record) {
    this.setState({
      visible: true,
      fields: record,
      show: {
        title: "编辑",
        type: "edit"
      }
    });
  }
  async getCarouselList() {
    const result = await _getCarouselList();
    this.setState({
      carouselList: result.data.result,
      finished: false
    })
  }
  handleOk() {
    this.setState({
      visible: false,
    });
  };

  handleCancel() {
    this.setState({
      visible: false,
    });
  };
  // 控制modal显示、隐藏
  handler(data) {
    console.log(data)
    if (data.code) {
      this.handleOk();
    } else {
      message.error(data.msg)
    }
  }
  render() {
    const { carouselList, columns, fields, show } = this.state;
    return (
      <div className="p15">
        <Button type="primary" onClick={() => this.add()}>添加</Button>
        <Table
          loading={this.state.finished}
          pagination={{ pageSize: 10 }}
          className="mt15" style={{ clear: 'inherit' }}
          rowKey={"cid"}
          columns={columns}
          dataSource={carouselList} />
        <Modal
          title={show.title}
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          footer={null}
        >
          {
            show.type === "add" ?
              <Add></Add> :
              <Edit fields={fields} handler={(data) => this.handler(data)}></Edit>
          }
        </Modal>
      </div>
    )
  }
}
export default Carousel;