import React from "react";

type UserInfoProps = {
  author: {
    name: string; // name is a string
    avatarUrl: string; // avatarUrl is a string
  };
};

export const UserInfo: React.FC<UserInfoProps> = ({ author }) => {
  return (
    <div className="UserInfo">
      <img className="Avatar" src={author.avatarUrl} alt={author.name} />
      <div className="UserInfo-name">{author.name}</div>
    </div>
  );
};
