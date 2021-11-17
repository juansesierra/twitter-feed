import React from 'react';
import TweetCard from './tweetCard';

const List = ({ user, tweets }) => {
  function getTweetInfo(tweet) {
    return {
      userName: user.userName,
      name: user.name,
      userImageUrl: user.profile_image_url,
      text: tweet.text
    }
  }
    return (
        <div className='list'>
          {
            tweets.map((tweetRaw) => <TweetCard tweet={getTweetInfo(tweetRaw)}/>)
          }
        </div>
    );
};

export default List;