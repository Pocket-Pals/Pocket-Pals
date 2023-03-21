import { useState, useEffect } from "react";
import MyCard from "src/components/Card/Card";
import Sidebar from "src/components/Sidebar/Sidebar";
import { Flex } from "src/styles/styles";
import styled from "styled-components";
import SearchBar from "src/components/SearchBar/SearchBar";
import { useRouter } from "next/router";

const CardConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

  // display: flex;
  // flex-wrap: wrap;
  // // justify-content: center;
  // // align-items: center;
  // flex: 0 1 33.333333%;
  // flex-direction: row;
  // gap: 1rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export default function find() {
  const router = useRouter();

  const [animals, setAnimals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const getAnimalData = async () => {
    const response = await fetch(`/api/petfinder/animals?page=${page}`);
    const data = await response.json();
    const animalData = data.animals.filter(
      (animal) =>
        animal.type === "Dog" || animal.type === "Cat" || animal.type === "Bird"
    );

    console.log(animalData);
    setAnimals(animalData);
  };

  useEffect(() => {
    getAnimalData();
  }, []);

  const petRoute = (o) => {
    window.open(o.url, "_blank");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery);
    const filteredAnimals = animals.filter((animal) =>
      animal.name.toLowerCase().includes(query.toLowerCase())
    );
    setAnimals(filteredAnimals);

    if (query === "") {
      getAnimalData();
    }
  };

  return (
    <>
      <div>
        <Flex>
          {/* <Sidebar /> */}

          <Body>
            <SearchBar
              handleValue={searchQuery}
              handleChange={(e) => setSearchQuery(e.target.value)}
              handleClick={() => handleSearch(searchQuery)}
            />
            <CardConatiner>
              {animals &&
                animals.map((o, i) => (
                  <MyCard
                    key={i}
                    title={o.name}
                    image={o.primary_photo_cropped?.full}
                    avatar={o.photos[0]?.medium}
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
                    handleCardClick={() => router.push(`/find/${o.id}`)}
                  />
                ))}{" "}
            </CardConatiner>
          </Body>
        </Flex>
      </div>
    </>
  );
}
