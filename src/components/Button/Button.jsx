import { Button, Space } from "antd";

export default function MyButton({ text, onClick = () => {}, icon, type }) {
  return (
    <>
      <Space wrap>
        <Button type={type || "primary"} onClick={onClick} icon={icon || null}>
          {text || "Button"}
        </Button>
      </Space>
    </>
  );
}
