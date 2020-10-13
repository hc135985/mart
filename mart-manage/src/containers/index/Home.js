import React, { Component } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { _getCarouselList, _addCarouselList, _delCarousel, _editCarousel } from '../../api/carousel'
import { Button, Pagination, Upload, message, Modal, Form, DatePicker, Input, Popconfirm } from 'antd';
const { RangePicker } = DatePicker;

class Home extends Component {
    state = {
        bannerList: [],
        visible: false,
        formItemLayout: {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        },
        config: {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        },
        rangeConfig: {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        },
        start_time: '',
        end_time: '',
        tit: '',
        img: '',
        cid: "",
        fields: [
            {
                name: 'tit',
                value: ''
            }
        ],
        type: '',
        loading: false,
        imageUrl: '',
        file: null,
        pagecount: 1
    }

    async getBannerList(obj) {
        let res = await _getCarouselList(obj)
        this.setState({
            bannerList: res.data.result
        })
    }
    componentDidMount() {
        this.getBannerList({ pagecount: this.state.pagecount, pagesize: 6 })
    }
    page = (pagecount, pagesize) => {
        this.setState({
            pagecount: pagecount
        })
        this.getBannerList({ pagecount, pagesize })
    }
    showModal = (type, item = {}) => {
        if (type === 'add') {
            this.setState({
                start_time: '',
                end_time: '',
                tit: '',
                imageUrl: '',
                cid: "",
                fields: [
                    {
                        name: 'tit',
                        value: ''
                    }
                ],
                type: type
            })
        } else {
            this.setState({
                start_time: item.start_time,
                end_time: item.end_time,
                tit: item.tit,
                imageUrl: item.img,
                cid: item.cid,
                fields: [
                    {
                        name: 'tit',
                        value: item.tit
                    }
                ],
                type: type
            })
        }
        this.setState({
            visible: true,
        });
    };

    handleOk = async () => {
        if (this.state.type === 'add') {
            if (this.state.file === null) return alert('请上传图片');
            var formData = new FormData();//*            
            formData.append("image1", this.state.file);//*
            formData.append("tit", this.state.tit);//*
            formData.append("start_time", this.state.start_time);//*
            formData.append("end_time", this.state.end_time);//*
            formData.append("cid", this.state.cid);//*
            let res = await _addCarouselList(formData)
            if (res.data.code === 1) {
                message.success(res.data.msg, 1, () => {
                    this.getBannerList({ pagecount: this.state.pagecount, pagesize: 6 })
                })
            } else {
                message.error(res.data.msg)
            }
            this.setState({
                visible: false,
            });
        } else {
            var formData = new FormData();//*        
            let file = this.state.file === null ? this.state.imageUrl : file
            formData.append("imageUrl", file);//*
            formData.append("tit", this.state.tit);//*
            formData.append("start_time", this.state.start_time);//*
            formData.append("end_time", this.state.end_time);//*
            formData.append("cid", this.state.cid);//*
            formData.append("type", 0);//*
            let res = await _editCarousel(formData)
            if (res.data.code === 1) {
                message.success(res.data.msg, 1, () => {
                    this.getBannerList({ pagecount: this.state.pagecount, pagesize: 6 })
                })
            } else {
                message.error(res.data.msg)
            }
            this.setState({
                visible: false,
            });
            this.setState({
                file: null
            })
        }
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    tabChange = active => {
        let start_time = new Date(active[0]._d).getTime();
        let end_time = new Date(active[1]._d).getTime();
        this.setState({
            start_time: start_time,
            end_time: end_time
        })
    }
    tit = ac => {
        this.setState({ tit: ac.target.value })
    }
    fileList = async ({ file }) => {
        this.setState({
            file: file
        })
    }
    confirm = async () => {
        let res = await _delCarousel({ cid: this.state.cid })
        if (res.data.code === 1) {
            message.success(res.data.msg, 1, () => {
                this.getBannerList({ pagecount: this.state.pagecount, pagesize: 6 })
            });
        } else {
            message.error(res.data.msg)
        }
    }

    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
                <h2>首页banner
                   <Button type='primary'
                        onClick={() => this.showModal('add')}
                    >添加banner</Button>
                </h2>
                <div className='main'>
                    {
                        this.state.bannerList.map(item => {
                            return <div className='item' key={item.cid + 'item'}>
                                <img src={item.img} alt='' title={item.tit} />
                                <h5>{item.tit}</h5>
                                <p>{item.start_time}</p>
                                <p>
                                    <Button type='primary'
                                        onClick={() => this.showModal('edit', item)}
                                    >编辑</Button>
                                    <Popconfirm
                                        title="是否删除"
                                        onConfirm={this.confirm}
                                        okText="是"
                                        cancelText="否"
                                    >
                                        <Button type='default'
                                            onClick={() => {
                                                this.setState({
                                                    cid: item.cid
                                                })
                                            }}
                                        >删除</Button>
                                    </Popconfirm>
                                </p>
                            </div>
                        })
                    }
                </div>
                <Pagination defaultCurrent={1} defaultPageSize={6} total={10} onChange={this.page} />
                <Modal
                    className='home-modal'
                    title="添加轮播图"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        beforeUpload={this.beforeUpload}
                        customRequest={this.fileList}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    <Form name="time_related_controls"
                        fields={this.state.fields}
                        {...this.state.formItemLayout} onFinish={this.onFinish}>
                        <Form.Item
                            label="活动标题"
                            name="tit"
                            rules={[{ required: true, message: '请输入标体 ' }]}
                        >
                            <Input onChange={this.tit} value={this.state.tit} />
                        </Form.Item>
                        <Form.Item name="range-picker" label="起止时间"
                            {...this.state.rangeConfig}>
                            <RangePicker onChange={this.tabChange} />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }

}

export default Home;