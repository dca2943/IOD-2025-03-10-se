import React from "react";

interface SingleCatProps {
  name: string;
  latinName: string;
  image: string;
}

export const SingleCat: React.FC<SingleCatProps> = ({
  name,
  latinName,
  image,
}) => {
  return (
    <li style={{ listStyle: "none", marginBottom: "20px" }}>
      <h2>{name}</h2>
      <p>
        <em>{latinName}</em>
      </p>
      <img
        src={image}
        alt={name}
        style={{ width: "150px", borderRadius: "10px" }}
      />
    </li>
  );
};
