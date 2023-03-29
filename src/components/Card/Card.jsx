import { Avatar, Card } from "antd";
import { GrandParent, Parent, Child } from "src/styles/styles";
import Button from "../Button/Button";
import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1, 0.8);
  transition: all 0.3s ease-in-out;
  max-width: 350px;
  // max-height: 250px;
  &:hover {
    translate-y: 5px;
  }
`;

const MyImage = styled(Image)`
  max-width: 366px;
  max-height: 250px;
  border-radius: 10px;
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
    handleCardClick,
    loading,
  } = props;

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
          <MyImage
            src={image || "/placeholders/placeholder-image.png"}
            alt="card cover"
            width={300}
            height={250}
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
            <Child width="100%" backgroundColor="#FFD9CB">
              <p>{breed + " 🐕" || "No breed provided."}</p>
            </Child>
          </Parent>
          <Parent>
            <Child width="100%" backgroundColor="#FFEAE7">
              <p>{tagsOne || "TAGS"}</p>
            </Child>
            <Child backgroundColor="#EDE5FF">
              <p>{age || "AGE"}</p>
            </Child>
            <Child width="100%" backgroundColor="#FFFCBE">
              <p>{adoptStatus || "STATUS"}</p>
            </Child>
          </Parent>
          <Parent>
            <Child backgroundColor="#EBFDC9">
              <p>{size || "SIZE"}</p>
            </Child>
            <Child width="100%" backgroundColor="#EBEBEB">
              <p>{tags || "NO TAGS"}</p>
            </Child>
            <Child backgroundColor="#FFCBBE">
              <p>{gender || "GENDER"}</p>
            </Child>
          </Parent>
          <Button text="Adopt Me" onClick={handleClick} />
          <Button
            type="secondary"
            text="View details"
            onClick={handleCardClick}
            border="2px solid #F67837"
          />
        </GrandParent>
      </StyledCard>
    </>
  );
}
