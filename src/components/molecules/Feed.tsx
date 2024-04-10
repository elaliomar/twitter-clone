import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Tweet from './Tweet';
import axios from 'axios';
import {TweetData} from '../../types/tweetTypes';
import usePullToRefresh from '../../utils/usePullToRefresh';

const Feed = () => {
  const [serverData, setServerData] = useState<TweetData[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  const fetchData = async () => {
    if (!isLoading && !isListEnd) {
      setIsLoading(true);
      await axios
        .get(`https://artisanlb.net/displayapi.php?page=${page}`)
        .then(res => {
          console.log('fetched successful ', res.data);
          console.log('length', res.data.length);
          if (res.data.length > 0) {
            setPage(prevPage => prevPage + 1);
            setServerData(prevData => [...(prevData ?? []), ...res.data]);
            setIsLoading(false);
          } else {
            setIsListEnd(true);
            setIsLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const {refreshing, onRefreshHandler} = usePullToRefresh({
    onRefreshFunction: async () => {
      setServerData([]);
      setPage(1);
      setIsListEnd(false);
    },
  });

  const renderFooter = () => {
    return (
      <View style={styles.loaderView}>
        {isLoading ? (
          <ActivityIndicator color={'#00b0f0'} style={styles.loader} />
        ) : null}
      </View>
    );
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const renderTweets = ({item}: {item: TweetData}) => {
    return (
      <Tweet
        id={item.id}
        username={item.username}
        image_url={item.image_url}
        content={item.content}
        date={item.date}
        userEmail={item.userEmail}
        userId={item.userId}
      />
    );
  };

  return (
    <View style={styles.page}>
      {serverData && (
        <FlatList
          data={serverData}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          renderItem={renderTweets}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          ListFooterComponent={renderFooter}
          onEndReached={fetchData}
          onEndReachedThreshold={0.5}
          refreshing={refreshing}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshHandler}
            />
          }
        />
      )}
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    margin: 15,
  },
});
