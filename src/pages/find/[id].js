import Image from "next/image";
import { Child, Container, Li, Type, Ul } from "src/styles/styles";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const StyledImg = styled(Image)`
  border-radius: 0.5rem;
`;

export default function handler({ animalData }) {
  console.log(animalData);
  const typeList = ["Type", "Status", "Size", "Breed", "Age", "Gender"];
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const {
    name,
    photos,
    description,
    breeds,
    age,
    status,
    size,
    tags,
    gender,
    type,
  } = animalData;

  const values = {
    Type: type,
    Status: status,
    Size: size,
    Breed: breeds.primary,
    Age: age,
    Gender: gender,
  };

  console.log(tags);

  return (
    <>
      <h1>Id: {id}</h1>
      <Container paddingMobile="20px 10px">
        <Container flexDirection="column" padding="40px 30px">
          <Container>
            <StyledImg
              src={photos[0]?.large || "/placeholders/placeholder-image.png"}
              width={500}
              height={500}
              alt="Picture"
            />
          </Container>
        </Container>
        <Container
          flexDirection="column"
          gap="20px"
          padding="40px 30px"
          paddingMobile="20px 10px"
          gapMobile="0px"
        >
          <div>
            <h1 className="text-xl">{name}</h1>
          </div>
          <Ul flexDirection="column" gap="10px">
            {typeList.map((item, index) => {
              return (
                <Li key={index}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {item}:
                  </span>{" "}
                  {values[item] || "Not Available"}
                </Li>
              );
            })}
          </Ul>
          <Container>
            <Type size="0.9rem">
              {description || "No description available for this pet."}
            </Type>
          </Container>
          <Container
            gap="15px"
            flexDirectionMobile="row"
            justifyContentMobile="flex-start"
            alignItemsMobile="flex-start"
            width="100%"
            gapMobile="10px"
            marginMobile="1rem"
          >
            <div className="tag-list">
              {tags.map((tag, index) => (
                <Child
                  gap="6px"
                  key={index}
                  backgroundColor="#fce9d8"
                  padding="10px 20px"
                >
                  <Type size="0.8rem">{tag}</Type>
                </Child>
              ))}
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/petfinder/animals");
  const data = await response.json();
  const paths = data.animals.map((animal) => ({
    params: { id: animal.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const response = await fetch(
    `http://localhost:3000/api/petfinder/animals/${id}`
  );
  const data = await response.json();
  return { props: { animalData: data.animal } };
}
