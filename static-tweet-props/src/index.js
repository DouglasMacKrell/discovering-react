import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <Avatar hash={tweet.avatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} /><Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <CommentButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

var testTweet = {
  message: "Something about my cat.",
  avatar: "?d=wavatar",
  author: {
    handle: "catperson",
    name: "Douglas MacKrell",
  },
  likes: 2,
  retweets: 9,
  timestamp: "2020-09-07 21:23:37",
};

const Avatar = ({ hash }) => {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar"></img>;
};

const Message = ({ text }) => {
  return <div className="message">{text}</div>;
};

const NameWithHandle = ({ author }) => {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

const Time = ({ time }) => {
  const timeStr = moment(time).fromNow();
  return <span className="time">{timeStr}</span>;
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

const CommentButton = () => <i className="far fa-comment reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {getRetweetCount(count)}
    </span>
  );
};

const ShareButton = () => (
  <i className="fas fa-external-link-alt more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
