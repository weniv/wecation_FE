import React from "react";
import styled from "styled-components";

const ChangeDataFormat = (date) => {
  // yyyy-mm-nnThh:mm:ss.sssZ 을 yyyy년 mm월 dd일로 변환
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

const Post = (props) => {
  const { post } = props;
  const author = post?.author;
  const place = post?.place || null;

  return (
    <StyledPost>
      <StyledProfile>
        <img src={author.image || "./img/profile/default.png"} alt="profile" />
        <p>{author.accountname}</p>
      </StyledProfile>

      <StyledContent>
        <p>{post.content}</p>
        {!!post.image.length && (
          <PostImgList>
            {post.image.map((img, idx) => (
              <li key={idx}>
                <img src={img} alt="post" />
              </li>
            ))}
          </PostImgList>
        )}
      </StyledContent>
      {place && (
        <StyledPlace>
          <p>
            {place.type === "work" ? <span>🏢 </span> : <span>🏖 </span>}
            {place.name}
          </p>
        </StyledPlace>
      )}
      <StyledDetail>
        <p>
          {post.hearted ? <span>♥</span> : <span>♡</span>} {post.heartCount}
        </p>
        <p>💬 {post.commentCount}</p>
        <time>{ChangeDataFormat(post.createdAt)}</time>
      </StyledDetail>
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled.article`
  border: 1px solid black;
  width: 32rem;
  margin: 2rem auto;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  p {
    margin-left: 1rem;
  }
`;

const StyledPlace = styled.div`
  padding: 0.4rem 1rem;
`;

const StyledContent = styled.div`
  padding: 1rem;

  img {
    width: 100%;
  }
`;
const PostImgList = styled.ul`
  display: flex;
  margin: 1rem auto;
`;

const StyledDetail = styled.div`
  font-size: 1.4rem;
  color: var(--ColorGrayLv4);

  display: flex;
  padding: 1rem;
  gap: 0.8rem;
  time {
    margin-left: auto;
  }
`;
