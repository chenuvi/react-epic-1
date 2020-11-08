import React, { useRef } from 'react'
import { useStores } from '../stores'
import { observer, useLocalStore } from 'mobx-react'
import { Upload, message, Spin } from 'antd'
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
    const refWidth = useRef()
    const refHeight = useRef()

    const store = useLocalStore(() => ({
        width: null,
        setWidth(width) {
            this.width = width
        },
        get widthStr() {
            return store.width ? `/w/${store.width}` : ''
        },
        height: null,
        setHeight(height) {
            this.height = height
        },
        get heightStr() {
            return store.height ? `/h/${store.height}` : ''
        },
        get furlStr() {
            //?imageView2/0/w/800/h/400)
            return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
        }

    }))

    const bindWidthChange = () => {
        console.log('bindWidthChange...')
        console.log('refWidth: ', refWidth);
        store.setWidth(refWidth.current.value)
    }

    const bindHeightChange = () => {
        store.setHeight(refHeight.current.value)
    }

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
            //  /(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test()
            if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
                message.error('只能上传png/svg/jpg/gif格式的图片');
                return false
            }
            if (file.size > 1024 * 1024 * 2) {
                message.error('图片最大 2 M');
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
            <Spin spinning={ImageStore.isUploading}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击或者拖拽上传图片</p>
                    <p className="ant-upload-hint">
                        仅支持.png/.gif/.jpg/.svg格式的图片，图片最大 2 M
                </p>
                </Dragger>
            </Spin>

            {
                ImageStore.serverFile ?
                    <Result>
                        <H2>上传结果</H2>
                        <dl>
                            <dt>线上地址</dt>
                            <dd><a>{ImageStore.serverFile.attributes.url.attributes.url}</a></dd>

                            <dt>文件名</dt>
                            <dd>{ImageStore.filename}</dd>

                            <dt>图片预览</dt>
                            <dd>
                                <Image src={ImageStore.serverFile.attributes.url.attributes.url}></Image>
                            </dd>
                            <dt>更多尺寸</dt>
                            <dd>
                                <input ref={refWidth} onChange={bindWidthChange} placeholder="最大宽度（可选）" ></input>
                                <input ref={refHeight} onChange={bindHeightChange} placeholder="最大高度（可选）"></input>
                            </dd>
                            <dd>
                                <a target="_blank" href={store.furlStr} >{store.furlStr}</a>

                            </dd>
                        </dl>
                    </Result> : null
            }

        </>
    );
})

export default Component;
