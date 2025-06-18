import React from "react";
import { UserInfo } from "./userinfo";

type ComplexCommentProps = {
  date: Date;
  text: string; // text is a string
  author: {
    // author is also an object
    name: string; // name is a string
    avatarUrl: string; // avatarUrl is a string
  };
};

export const ComplexComment: React.FC<ComplexCommentProps> = ({
  date,
  text,
  author,
}) => {
  return (
    <div className="Comment componentBox">
      <UserInfo author={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{date.toLocaleString()} </div>
    </div>
  );
};
