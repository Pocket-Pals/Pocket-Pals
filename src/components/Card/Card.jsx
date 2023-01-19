import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { GrandParent, Parent, Child, Type } from "src/styles/styles";
import Button from "../Button/Button";

const { Meta } = Card;
export default function MyCard({
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
}) {
  return (
    <>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="card cover"
            src={image || "/placeholders/placeholder-image.png"}
          />
        }
      >
        <Meta
          avatar={<Avatar src={avatar || "https://placekitten.com/100"} />}
          title={title || "Default Title"}
          description={description || "No description provided."}
        />

        <GrandParent>
          <Parent>
            <Child width="100%">
              <p>{breed + " 🐕" || "No breed provided."}</p>
            </Child>
          </Parent>
          <Parent>
            <Child width="100%">
              <p>{tagsOne || "NO TAGS"}</p>
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
          <Button />
        </GrandParent>
      </Card>
    </>
  );
}
