import React from "react";
import Post from "./Post";
import styled from "styled-components";

const PostList = (props) => {
  const { data } = props;
  return (
    <StyledList>
      {data.post.map((post, index) => {
        return (
          <li key={index}>
            <Post post={post} />
          </li>
        );
      })}
    </StyledList>
  );
};

export default PostList;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
