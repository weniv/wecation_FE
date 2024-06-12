import React from "react";
import { TemplateStyle } from "./TemplateStyle";
import { PostList } from "../common";
import { PostData } from "../../data/PostData";

const CommunityTemplate = () => {
  return (
    <TemplateStyle>
      <PostList data={PostData} />
    </TemplateStyle>
  );
};

export default CommunityTemplate;
