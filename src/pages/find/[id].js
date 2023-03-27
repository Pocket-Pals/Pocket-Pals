import Image from "next/image";
import { Child, Container, Li, Type, Ul } from "src/styles/styles";
import styled from "styled-components";
import { useRouter } from "next/router";
// import { getToken } from "src/server/petfinder-auth";
import { Lottie } from "lottie-react";
import { Card } from "antd";

import axios from "axios";

import { getToken } from "src/server/petfinder-auth";

const StyledImg = styled(Image)`
  border-radius: 0.5rem;
`;

export default function handler({ animalData }) {
  console.log(animalData);
  const typeList = ["Type", "Status", "Size", "Breed", "Age", "Gender"];
  const router = useRouter();

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
    Status: status.toUpperCase().slice(0, 1) + status.slice(1),
    Size: size,
    Breed: breeds.primary,
    Age: age,
    Gender: gender,
  };

  // console.log(tags);

  return (
    <>
      <Container paddingMobile="20px 10px">
        <Container flexDirection="column" padding="40px 30px">
          <Container maxWidth="500px" maxHeight="500px">
            <StyledImg
              src={photos[0]?.large || "/placeholders/placeholder-image.png"}
              width={500}
              height={500}
              quality={100}
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
                  padding="5px 0px"
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
  // get no static paths
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const access_token = await getToken();
  const response = await axios.get(
    `https://api.petfinder.com/v2/animals/${id}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const data = response.data;
  return { props: { animalData: data.animal } };
}
