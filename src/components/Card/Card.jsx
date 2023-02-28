import { Avatar, Card, Skeleton, Switch } from "antd";
import { GrandParent, Parent, Child } from "src/styles/styles";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1, 0.8);
  transition: all 0.3s ease-in-out;
  // max-width: 300px;
  // width: 100% !important;
  // margin: 0 auto;
  &:hover {
    translate-y: 5px;
  }
`;

const { Meta } = Card;
export default function MyCard({ ...props }) {
  const {
    title,
    description,
    image,
    avatar,
    breed,
    age,
    adoptStatus,
    gender,
    size,
    tags,
    tagsOne,
    handleClick,
  } = props;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  let trimmedDescription = description;
  if (description) {
    trimmedDescription =
      description.length > 100
        ? description.substring(0, 80) + "..."
        : description;
  }

  return (
    <>
      <StyledCard
        loading={loading}
        cover={
          <img
            alt="card cover"
            src={image || "/placeholders/placeholder-image.png"}
          />
        }
      >
        <Meta
          avatar={
            <Avatar src={avatar || "/placeholders/placeholder-image.png"} />
          }
          title={title || "Default Title"}
          description={trimmedDescription || "No description provided."}
        />

        <GrandParent>
          <Parent>
            <Child width="100%">
              <p>{breed + " 🐕" || "No breed provided."}</p>
            </Child>
          </Parent>
          <Parent>
            <Child width="100%">
              <p>{tagsOne || "TAGS"}</p>
            </Child>
            <Child>
              <p>{age || "AGE"}</p>
            </Child>
            <Child width="100%">
              <p>{adoptStatus || "STATUS"}</p>
            </Child>
          </Parent>
          <Parent>
            <Child>
              <p>{size || "SIZE"}</p>
            </Child>
            <Child width="100%">
              <p>{tags || "NO TAGS"}</p>
            </Child>
            <Child>
              <p>{gender || "GENDER"}</p>
            </Child>
          </Parent>
          <Button text="Adopt Me" onClick={handleClick} />
        </GrandParent>
      </StyledCard>
    </>
  );
}
