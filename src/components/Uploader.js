import React, { useRef } from 'react'
import { useStores } from '../stores'
import { observer } from 'mobx-react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Component = observer(() => {
    const { ImageStore } = useStores()
    const ref = useRef()
    const props = {
        name: 'file',
        showUploadList:false,
        multiple: false,
        beforeUpload: file => {
            console.log('file: ', file);
            ImageStore.setFile(file)
            ImageStore.setFilename(file.name)
            ImageStore.upload()
                .then((serverFile) => {
                    console.log('serverFile上传成功: ', serverFile)
                }).catch(error => {
                    console.log('error in Uploader component: ', error);
                })
            return false
        }
    }

    return (
        <>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single . Strictly prohibit from uploading company data or other band files
                </p>
            </Dragger>,
            <h2>上传结果</h2>
            {
               ImageStore.serverFile ?  <><b>{ImageStore.filename}</b><br />{ImageStore.serverFile.attributes.url.attributes.url}</> : null
            }
            
        </>
    );
})

export default Component;
