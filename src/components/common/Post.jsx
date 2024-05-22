import React from "react";

const Post = (props) => {
  const { post } = props;
  const author = post?.author;
  const place = post?.place;

  return (
    <div>
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
      <p>{post.heartCount}</p>
      <p>{post.commentCount}</p>
      <p>{author.username}</p>
      <p>@{author.accountname}</p>
      <p>{place?.name}</p>
      <p>{place?.type}</p>
    </div>
  );
};

export default Post;
