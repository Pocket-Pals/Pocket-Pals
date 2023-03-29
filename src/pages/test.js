import Image from "next/image";
import { Child, Container, Li, Type, Ul } from "src/styles/styles";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const StyledImg = styled(Image)`
  border-radius: 0.5rem;
`;

export default function handler({ txt, description, tags, src }) {
  const typeList = ["Type", "Status", "Size", "Breed", "Attributes"];
  const tagList = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

  return (
    <>
      <Container paddingMobile="20px 10px">
        <Container flexDirection="column" padding="40px 30px">
          <Container>
            <StyledImg
              src={src || "/placeholders/placeholder-image.png"}
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
            <h1 className="text-xl">Name</h1>
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
                  {txt || "Not Available"}
                </Li>
              );
            })}
          </Ul>
          <Container>
            <Type size="0.9rem">
              {description ||
                "Bite the neighbor's bratty kid purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow iâ€™m so hungry iâ€™m so hungry but ew not for that . Munch, munch, chomp, chomp see owner, run in terror, i like fish so purrr purr littel cat, little cat purr purr. Then cats take over the world poop on grasses, for missing until dinner time, yet give attitude, or bite the neighbor's bratty kid find empty spot in cupboard and sleep all day, or that box? i can fit in that box. Paw at beetle and eat it before it gets away side-eyes your other hand while being petted and demand to have some of whatever the human is cooking, then sniff the offering and walk away weigh eight pounds but take up a full-size bed, and if human is on laptop sit on the keyboard for poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss"}
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
            {tagList.map((o, i) => {
              return (
                <>
                  <Child key={i}>
                    <Type size="0.8rem">{tags || o}</Type>
                  </Child>
                </>
              );
            })}
          </Container>
        </Container>
      </Container>
    </>
  );
}
