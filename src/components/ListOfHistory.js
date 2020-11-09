import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores'
import { List, message, Spin } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';

const HistoryList = observer(() => {
    const { HistoryStore } = useStores()
    console.log('HistoryStore.list: ', HistoryStore.list);

    const loadMore = () => {
        HistoryStore.find()
    }

    useEffect(() => {
        console.log('加载');
        return () => {
            console.log('卸载组件');
            HistoryStore.reset()
        }
    },[])
    return (
        <>
            <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={loadMore}
                hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
                useWindow={true}
            >
                <List
                    dataSource={ HistoryStore.list}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <div ><img style={{height:'100px'}} src={item.attributes.url.attributes.url}></img></div>
                            <div>
                                <h5>{item.attributes.filename}</h5>
                            </div>
                            <div>
                                <a target="_blank" href={item.attributes.url.attributes.url}>{item.attributes.url.attributes.url}</a>
                            </div>
                        </List.Item>
                    )}
                >
                    {HistoryStore.isLoading && HistoryStore.hasMore && (
                        <div>
                            <Spin tip="加载中" />
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </>
    );
})

export default HistoryList;