import React from "react";
import { SingleCat } from "./SingleCat";

interface Cat {
  id: number;
  name: string;
  latinName: string;
  image: string;
}

const cats: Cat[] = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "https://via.placeholder.com/150",
  },
];

export const BigCats: React.FC = () => {
  return (
    <div className="BigCats componentBox">
      <h1>Big Cats</h1>
      <p>List of big cats with their Latin names and images.</p>
      <ul>
        {cats.map((cat) => (
          <SingleCat key={cat.id} {...cat} />
        ))}
      </ul>
    </div>
  );
};
