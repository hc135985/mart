import React, { Component } from 'react'
import { Upload, message, Image } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { _avatarUpload, _getAvatarList } from '@/api/user';
import { connect } from 'dva';

@connect((store => store.user))
class UploadAvatar extends Component {
  state = {
    loading: false,
    imageUrl: "",
    avatarList: [],
    pageSize: 1,
    pageCount: 10
  };
  componentDidMount() {
    this.getAvatarList()
  }
  async getAvatarList(pageSize = 1, pageCount = 10) {
    const result = await _getAvatarList({ uid: this.props.uid, pageSize, pageCount });
    this.setState({
      avatarList: result.data.data
    })
  }
  beforeUpload(file) {
    this.setState({
      loading: true,
    })
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
  async handleChange({ file }) {
    const avatarForm = new FormData();
    avatarForm.append("files", file);
    const result = await _avatarUpload({ avatarForm, uid: this.props.uid });
    this.setState({
      loading: false,
      imageUrl: result.data.imgUrl
    })
  }
  render() {
    const { loading, imageUrl, avatarList } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <div>
        Upload

        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={(file) => this.beforeUpload(file)}
          customRequest={(obj) => this.handleChange(obj)}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        <h3>历史头像</h3>
        <ul className="m15">
          {
            avatarList.map(avatar => {
              return <li key={avatar.aid} className="inline-block">
                <Image
                  className="m15"
                  width={80}
                  height={80}
                  src={avatar.imgUrl}
                />
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default UploadAvatar