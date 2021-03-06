import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import "./tweetCard.css"

const Avatar = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      className="avatar"
      alt="avatar" />
  )
}

const Author = ({ userInfo }) => {
  return (
    <span className="author">
      <span className="name">{userInfo.name}</span>
      <span className="handle">@{userInfo.userName}</span>
    </span>
  )
}

const Replies = ({ replyCount }) => {
  return (
    <>
      <span className="fa fa-reply me-1" />
      <span>{replyCount}</span>
    </>
  )
}

const Retweets = ({ retweetCount }) => {
  return (
    <>
      <span className="fa fa-retweet me-1" />
      <span>{retweetCount}</span>
    </>
  )
}

const Likes = ({ likeCount }) => {
  return (
    <>
      <span className="fa fa-heart me-1" />
      <span>{likeCount}</span>
    </>
  )
}

const TweetCard = ({ tweet }) => {
  return (
    <div className="tweet">
      <Avatar imageUrl={tweet.userImageUrl} />
      <Container>
        <Author userInfo={{ name: tweet.name, userName: tweet.userName }} />
        <div className="message">{tweet.text}</div>
        <Row className="mt-1">
          <Col sm={3}>
            <Replies replyCount={tweet.replyCount} />
          </Col>
          <Col sm={3}>
            <Retweets retweetCount={tweet.retweetCount} />
          </Col>
          <Col sm={3}>
            <Likes likeCount={tweet.likeCount} />
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default TweetCard;