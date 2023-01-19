import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 0;
  margin: 1rem 0;
`;

const Child = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  padding: 0.2rem 0.8rem;
  border-radius: 0.3rem;
`;

const { Meta } = Card;
export default function MyCard({ title, description, image, avatar, breed }) {
  return (
    <>
      <Card
        style={{
          width: 300,
        }}
        cover={
          // <Image
          //   src={image || "/placeholders/placeholder-image.png"}
          //   width={200}
          //   height={200}
          //   alt="card cover"
          // />
          <img
            alt="card cover"
            src={image || "/placeholders/placeholder-image.png"}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={avatar || "https://placekitten.com/100"} />}
          title={title || "Default Title"}
          description={description || "This is the default Description."}
        />

        <Parent>
          <Child>
            <p>{breed || "BREED"}</p>
          </Child>
        </Parent>
      </Card>
    </>
  );
}
