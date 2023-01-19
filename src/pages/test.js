import React from "react";
import MyCard from "src/components/Card/Card";
import Button from "src/components/Button/Button";
import { useState, useEffect } from "react";
import { Flex } from "src/styles/styles";

export default function () {
  const [dogs, setDogs] = useState([]);

  // const tryGetToken = async () => {
  //   const response = await fetch("/api/petfinder/animals");
  //   const data = await response.json();
  //   console.log(data.types);
  // };

  const getDogs = async () => {
    const response = await fetch("/api/petfinder/animals");
    const data = await response.json();
    const dogData = data.animals.filter((animal) => animal.type === "Dog");
    console.log(dogData);
    setDogs(dogData);
  };

  // useEffect(() => {
  //   getDogs();
  // }, []);

  return (
    <>
      <Flex width="fit-content">
        <Button text="Get dogs" onClick={getDogs} />
      </Flex>
      {dogs.map((o, i) => (
        <MyCard
          key={i}
          title={o.name}
          image={o.primary_photo_cropped.full}
          avatar={o.photos[0].medium}
          description={o.description}
          breed={o.breeds.primary}
          age={o.age}
          adoptStatus={o.status.charAt(0).toUpperCase() + o.status.slice(1)}
          size={o.size}
          tagsOne={o.tags[0]}
          tags={o.tags[2]}
          gender={o.gender}
        />
      ))}
    </>
  );
}
