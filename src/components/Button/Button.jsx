import { Button, Space } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: ${(props) => props.width || null};
`;

export default function MyButton({ text, onClick = () => { }, icon, type }) {
  return (
    <>
      <StyledButton
        type={type || "primary"}
        onClick={onClick}
        icon={icon || null}
      >
        {text || "Button"}
      </StyledButton>
    </>
  );
}
