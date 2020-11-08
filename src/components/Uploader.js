import React, { useRef } from 'react'
import { useStores } from '../stores'
import { observer } from 'mobx-react'
import { Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { Dragger } = Upload;

const Result = styled.div`
    margin-top:30px;
    border:1px  dashed #ccc;
    padding:20px;
`
const H2 = styled.h2`
    margin:20px 0;
    text-align:center;
    `
    const Image = styled.img`
    max-width:400px;
`
const Component = observer(() => {
    const { ImageStore, UserStore } = useStores()
    const ref = useRef()
    const props = {
        name: 'file',
        showUploadList: false,
        multiple: false,
        beforeUpload: file => {
            console.log('file: ', file);
            ImageStore.setFile(file)
            ImageStore.setFilename(file.name)
            if (!UserStore.currentUser) {
                message.warning('请先登陆再上传！！！');
                return false
            }
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

            {
                ImageStore.serverFile ?
                    <Result>
                        <H2>上传结果</H2>
                        <dl>
                            <dt>线上地址</dt>
                            <dd>{ImageStore.serverFile.attributes.url.attributes.url}</dd>

                            <dt>文件名</dt>
                            <dd>{ImageStore.filename}</dd>

                            <dt>图片预览</dt>
                            <dd>
                                <Image src={ImageStore.serverFile.attributes.url.attributes.url}></Image>
                            </dd>
                            <dt>更多尺寸</dt>
                            <dd>
                                <input placeholder="最大宽度（可选）"></input>
                                <input placeholder="最大高度（可选）"></input>
                            </dd>
                        </dl>
                    </Result> : null
            }

        </>
    );
})

export default Component;
