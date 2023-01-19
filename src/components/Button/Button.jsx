import { Button, Space } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: ${(props) => props.width || "100%"};
`;

const StyledSpacer = styled(Space)`
  width: "100%";
`;

const Container = styled.div`
  width: "100%";
`;

export default function MyButton({ text, onClick = () => {}, icon, type }) {
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
