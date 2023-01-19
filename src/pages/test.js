import React from "react";
import MyCard from "src/components/Card/Card";
import Button from "src/components/Button/Button";
import { useState, useEffect } from "react";

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
      <Button text="Get dogs" onClick={getDogs} />
      {/* {dogs.map((o, i) => (
        <MyCard
          key={i}
          title={o.name}
          description={o.description}
          image={o.primary_photo_cropped.full}
          // avatar={}
        />
      ))} */}
      <MyCard />
    </>
  );
}
