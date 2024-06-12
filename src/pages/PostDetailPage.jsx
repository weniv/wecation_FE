import React from "react";
import { useParams } from "react-router-dom";
import PostDetailTemplate from "../components/template/PostDetailTemplate";

const PostDetailPage = () => {
  const params = useParams();
  const postId = params.id;

  return <PostDetailTemplate postId={postId}></PostDetailTemplate>;
};

export default PostDetailPage;
