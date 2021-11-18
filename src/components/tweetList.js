import React from 'react';
import TweetCard from './tweetCard';

const List = ({ user, tweets }) => {
  function getTweetInfo(tweet) {
    return {
      userName: user.userName,
      name: user.name,
      userImageUrl: user.imageUrl,
      text: tweet.text
    }
  }
  return (
      <div className='list'>
        {
          tweets.map((tweetRaw) => <TweetCard key={tweetRaw.id} tweet={getTweetInfo(tweetRaw)}/>)
        }
      </div>
  );
};

export default List;