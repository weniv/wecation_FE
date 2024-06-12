import React from "react";
import styled from "styled-components";
import { ColorIcon } from ".";
import { Link } from "react-router-dom";

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
    <StyledPost to={`/post/${post.id}`}>
      <StyledProfile>
        <img
          src={`.${author.image}` || "./img/profile/default.png"}
          alt="profile"
        />
        <p>{author.accountname}</p>
      </StyledProfile>

      <StyledContent>
        <p>{post.content}</p>
        {!!post.image.length && (
          <PostImgList>
            {post.image.map((img, idx) => (
              <li key={idx}>
                <img src={`.${img}`} alt="post" />
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
        <IconContainer>
          {post.hearted ? (
            <ColorIcon
              src="icon-heart-fill"
              color="var(--ColorError)"
              size="2rem"
            />
          ) : (
            <ColorIcon
              src="icon-heart"
              color="var(--ColorGrayLv4)"
              size="2rem"
            />
          )}
          {post.heartCount}
        </IconContainer>
        <IconContainer>
          <ColorIcon
            src="icon-chatting"
            color="var(--ColorGrayLv4)"
            size="1.8rem"
          />
          {post.commentCount}
        </IconContainer>
        <time>{ChangeDataFormat(post.createdAt)}</time>
      </StyledDetail>
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled(Link)`
  border-bottom: 1px solid var(--ColorGrayLv2);
  width: auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
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
  padding: 0.4rem 0;
`;

const StyledContent = styled.div`
  img {
    width: 100%;
  }
`;
const PostImgList = styled.ul`
  display: flex;
  margin: 1rem auto 0;
  width: 100%;
  gap: 1rem;

  img {
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
  }
`;

const StyledDetail = styled.div`
  font-size: 1.4rem;
  color: var(--ColorGrayLv4);

  display: flex;
  gap: 1.2rem;
  align-items: center;
  time {
    margin-left: auto;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
