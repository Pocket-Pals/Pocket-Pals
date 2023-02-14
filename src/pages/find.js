import { useState, useEffect } from "react";
import MyCard from "src/components/Card/Card";
import Sidebar from "src/components/Sidebar/Sidebar";
import { Flex } from "src/styles/styles";
import styled from "styled-components";
import SearchBar from "src/components/SearchBar/SearchBar";

const CardConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  width: 100%;
  @media (max-width: 1593px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1323px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export default function find() {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getDogs = async () => {
    const response = await fetch("/api/petfinder/animals");
    const data = await response.json();
    const dogData = data.animals.filter((animal) => animal.type === "Dog");
    console.log(dogData);
    // console.log(dogData[0].photos[0].medium);
    setDogs(dogData);
  };

  useEffect(() => {
    getDogs();
  }, []);

  const petRoute = (o) => {
    window.open(o.url, "_blank");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery);
    const filteredDogs = dogs.filter((dog) =>
      dog.name.toLowerCase().includes(query.toLowerCase())
    );
    setDogs(filteredDogs);

    if (query === "") {
      getDogs();
    }
  };

  return (
    <>
      <div>
        <Flex>
          <Sidebar />
          <Body>
            <SearchBar
              handleValue={searchQuery}
              handleChange={(e) => setSearchQuery(e.target.value)}
              handleClick={() => handleSearch(searchQuery)}
            />
            <CardConatiner>
              {dogs &&
                dogs.map((o, i) => (
                  <MyCard
                    key={i}
                    title={o.name}
                    // image={o.primary_photo_cropped.full}
                    // avatar={o.photos[0].medium}
                    description={o.description}
                    breed={o.breeds.primary}
                    age={o.age}
                    adoptStatus={
                      o.status.charAt(0).toUpperCase() + o.status.slice(1)
                    }
                    size={o.size}
                    tagsOne={o.tags[0]}
                    tags={o.tags[2]}
                    gender={o.gender}
                    handleClick={() => petRoute(o)}
                  />
                ))}{" "}
            </CardConatiner>
          </Body>
        </Flex>
      </div>
    </>
  );
}
