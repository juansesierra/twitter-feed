import React from 'react';
import TweetCard from './tweetCard';

const List = ({ user, tweets }) => {
  function getTweetInfo(tweet) {
    return {
      userName: user.userName,
      name: user.name,
      userImageUrl: user.imageUrl,
      text: tweet.text,
      replyCount: tweet.public_metrics.reply_count,
      likeCount: tweet.public_metrics.like_count,
      retweetCount: tweet.public_metrics.retweet_count
    }
  }
  return (
    <div>
      {
        tweets.map((tweetRaw) => <TweetCard key={tweetRaw.id} tweet={getTweetInfo(tweetRaw)} />)
      }
    </div>
  );
};

export default List;