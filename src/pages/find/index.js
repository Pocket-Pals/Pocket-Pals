import { useState, useEffect } from "react";
import MyCard from "src/components/Card/Card";
import Sidebar from "src/components/Sidebar/Sidebar";
import { Flex, CardConatiner, Body, Container } from "src/styles/styles";
import SearchBar from "src/components/SearchBar/SearchBar";
import { useRouter } from "next/router";
import Lottie from "lottie-react";

export default function find() {
  const router = useRouter();

  const [animals, setAnimals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadSpinner, setLoadSpinner] = useState(false);

  const getAnimalData = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/petfinder/animals?page=${page}`);
    const data = await response.json();
    const animalData = data.animals.filter(
      (animal) =>
        animal.type === "Dog" || animal.type === "Cat" || animal.type === "Bird"
    );

    console.log(animalData);
    setAnimals(animalData);
    setIsLoading(false);
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

  useEffect(() => {
    setLoadSpinner(true);
    setTimeout(() => {
      setLoadSpinner(false);
    }, 1000);
  }, [animals]);

  return (
    <>
      <div>
        <Flex>
          {/* <Sidebar /> */}

          <Body width="100%">
            <SearchBar
              handleValue={searchQuery}
              handleChange={(e) => setSearchQuery(e.target.value)}
              handleClick={() => handleSearch(searchQuery)}
            />

            {loadSpinner ? (
              <Container
                justifyContent="center"
                alignItems="center"
                height="100vh"
                width="100%"
                margin="auto"
              >
                <Lottie
                  animationData={require("../../../public/lottiefiles/loading1.json")}
                  autoplay={true}
                  loop={true}
                  style={{ width: 200, height: 200, margin: "auto" }}
                />
              </Container>
            ) : (
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
                      loading={isLoading}
                    />
                  ))}{" "}
              </CardConatiner>
            )}
          </Body>
        </Flex>
      </div>
    </>
  );
}
