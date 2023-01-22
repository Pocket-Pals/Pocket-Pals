import React from "react";
import MyCard from "src/components/Card/Card";
import Button from "src/components/Button/Button";
import { useState, useEffect } from "react";
import { Flex } from "src/styles/styles";
import Auth from "src/components/Auth/Auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "/firebase";

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

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (e) {
      console.error("Error reading document: ", e);
    }
  };

  return (
    <>
      {/* <Flex width="fit-content">
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
      ))} */}
      <Auth />
      <Button text="Add data" onClick={addData} />
      <Button text="Read data" onClick={readData} />
    </>
  );
}
