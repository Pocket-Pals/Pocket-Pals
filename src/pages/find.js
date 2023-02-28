import { useState, useEffect } from "react";
import MyCard from "src/components/Card/Card";
import Sidebar from "src/components/Sidebar/Sidebar";
import { Flex } from "src/styles/styles";
import styled from "styled-components";
import SearchBar from "src/components/SearchBar/SearchBar";

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
  const [animals, setAnimals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [catVal, setCatVal] = useState("");
  const [dogVal, setDogVal] = useState("");

  const getAnimalData = async () => {
    // const animalData = [];

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

  // const clearInput = (e) => {
  //   e.preventDefault();
  //   setCatVal("");
  //   setDogVal("");
  // };

  // const handleRadioChange = (e) => {
  //   setDogVal(e.target.value);
  //   setCatVal(e.target.value);
  // };

  // const handleReset = () => {
  //   setDogVal("");
  //   setCatVal("");
  // };

  return (
    <>
      <div>
        <Flex>
          <Sidebar />
          {/* <div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <input
                  type="radio"
                  name="Cat"
                  value="Cat"
                  checked={catVal === "Cat"}
                  onChange={handleRadioChange}
                />
                <label for="Cat">Cat</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="Dog"
                  value="Dog"
                  checked={dogVal === "Dog"}
                  onChange={handleRadioChange}
                />
                <label for="Dog">Dog</label>
              </div>

              <button onClick={handleReset}>Clear</button>
            </form>
          </div> */}
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
                  />
                ))}{" "}
            </CardConatiner>
          </Body>
        </Flex>
      </div>
    </>
  );
}
