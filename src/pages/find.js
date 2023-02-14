import { useState, useEffect } from "react";
import MyCard from "src/components/Card/Card";
import Button from "src/components/Button/Button";
import Sidebar from "src/components/Sidebar/Sidebar";
import { Flex } from "src/styles/styles";

export default function find() {
  const [dogs, setDogs] = useState([]);
  const getDogs = async () => {
    const response = await fetch("/api/petfinder/animals");
    const data = await response.json();
    const dogData = data.animals.filter((animal) => animal.type === "Dog");
    console.log(dogData);
    setDogs(dogData);
  };
  useEffect(() => {
    getDogs();
  }, []);
  return (
    <>
      <div>
        <Flex>
          <Sidebar />
          {dogs.map((o, i) => (
            <MyCard
              key={i}
              title={o.name}
              // image={o.primary_photo_cropped.full}
              // avatar={o.photos[0].medium}
              description={o.description}
              breed={o.breeds.primary}
              age={o.age}
              adoptStatus={o.status.charAt(0).toUpperCase() + o.status.slice(1)}
              size={o.size}
              tagsOne={o.tags[0]}
              tags={o.tags[2]}
              gender={o.gender}
            />
          ))}{" "}
        </Flex>
      </div>
    </>
  );
}
