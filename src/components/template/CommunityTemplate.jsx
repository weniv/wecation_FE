import React from "react";
import { TemplateSylte } from "./TemplateSylte";
import { PostList } from "../common";
import { PostData } from "../../data/PostData";

const CommunityTemplate = () => {
  return (
    <TemplateSylte>
      <PostList data={PostData} />
    </TemplateSylte>
  );
};

export default CommunityTemplate;
