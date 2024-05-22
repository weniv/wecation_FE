import React from "react";
import Post from "./Post";

const PostList = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.post.map((post, index) => {
        return (
          <li key={index}>
            <Post post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
