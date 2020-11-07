import React, { useRef } from 'react'
import { useStores } from '../stores'
import { observer } from 'mobx-react'

const Component = observer(() => {
    const { ImageStore } = useStores()
    const ref = useRef()

    const bindChange = () => {
        console.log('ref.current1: ', ref.current);
        if (ref.current.files.length > 0) {
            ImageStore.setFile(ref.current.files[0])
            ImageStore.setFilename(ref.current.files[0].name)
            ImageStore.upload()
                .then((serverFile) => {
                    console.log('serverFile上传成功: ', serverFile)
                }).catch( error => { 
                    console.log('error in Uploader component: ', error);
                })
        }
        window.file = ref.current
    }
    return (
        <>
            <h2>上传文件</h2>
            <input type='file'  ref={ref}  onChange={bindChange} />
        </>
    );
})

export default Component;
