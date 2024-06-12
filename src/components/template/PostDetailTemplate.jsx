import React from "react";
import { PostData } from "../../data/PostData";
import { PostDetail } from "../common";

const PostDetailTemplate = (props) => {
  const { postId } = props;
  // PostData에서 id가 postId와 동일한 요소를 찾아서 post에 저장
  const post = PostData["post"].find((post) => post.id === postId);
  console.log(post);

  return <PostDetail post={post} />;
};

export default PostDetailTemplate;
