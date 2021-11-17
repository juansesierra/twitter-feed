import React from 'react'
import "./tweetCard.css"

const TweetCard = ({tweet}) => {
  return(
    <div className="tweet">
      <img
        src={tweet.userImageUrl}
        className="avatar"
        alt="avatar"/>
        <div className="content">
          <span className="author">
            <span className="name">{tweet.name}</span>
            <span className="handle">@{tweet.userName}</span>
          </span>
          <div className="message">{tweet.text}</div>
        </div>
    </div>
  )
};

export default TweetCard;