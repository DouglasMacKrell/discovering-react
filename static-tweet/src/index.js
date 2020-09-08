import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <NameWithHandle/><Time/>
        <Message/>
        <div className="buttons">
          <LikeButton/>
          <CommentButton/>
          <ShareButton/>
          <RetweetButton/>
        </div>
      </div>
    </div>
  )
}

const Avatar = () => {
  return (
    <img
      src="https://avatars1.githubusercontent.com/u/52139563?s=460&u=e07b6e247617693a38ade30d7ece3738726cff52&v=4"
      className="avatar"
      alt="avatar"
    ></img>
  );
}

const Message = () => {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  )
}

const NameWithHandle = () => {
  return (
    <span className="name-with-handle">
      <span className="name">Douglas MacKrell</span>
      <span className="handle">@DouglasMacKrell</span>
    </span>
  )
}

const Time = () => (
    <span className="time">3h ago</span>
)

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
)

const CommentButton = () => (
  <i className="far fa-comment"/>
)

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
)

const ShareButton = () => (
  <i className="fas fa-external-link-alt"/>
)

ReactDOM.render(<Tweet/>, document.querySelector('#root'))