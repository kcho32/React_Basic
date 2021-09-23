import React, { Component } from 'react';
import Comment from "./Comments";

const comments = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};


class Bridge extends Component {
  render() {
    return (
      <div>
        <CommentList comments={comments}/>
      </div>
    );
  }
}

export default Bridge;