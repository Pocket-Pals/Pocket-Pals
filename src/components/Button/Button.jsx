import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  // padding: ${(props) => props.padding || "20px"};
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bgColor || "#F67837"};
  border: ${(props) => props.border || null};
  font-size: 14px;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.hoverbgcolor || "#D96D36"} !important;
    color: ${(props) => props.hovercolor || "white"};
  }
  &.ant-btn-secondary {
    background-color: ${(props) => props.secondarybgcolor || "white"};
    color: ${(props) => props.secondarycolor || "#F67837"};
    &:hover {
      background-color: ${(props) => props.secondaryhoverbgcolor || "#D4A017"};
      color: ${(props) => props.secondaryhovercolor || "white"};
      border: 2px solid #F67837;
    }
`;

export default function MyButton({
  text,
  onClick = () => {},
  padding,
  icon,
  type,
  color,
  bgColor,
  hoverbgcolor,
  hovercolor,
  border,
  secondarybgcolor,
  secondarycolor,
  secondaryhoverbgcolor,
  secondaryhovercolor,
}) {
  return (
    <>
      <StyledButton
        type={type || "primary"}
        onClick={onClick}
        icon={icon || null}
        color={color || null}
        bgcolor={bgColor || "#F67837"}
        // padding={padding || "20px"}
        hoverbgcolor={hoverbgcolor || "#D96D36"}
        hovercolor={hovercolor || "white"}
        secondarybgcolor={secondarybgcolor || "white"}
        secondarycolor={secondarycolor || "#F67837"}
        secondaryhoverbgcolor={secondaryhoverbgcolor || "#FFD9C5"}
        secondaryhovercolor={secondaryhovercolor || "#F67837"}
        border={border || null}
      >
        {text || "Button"}
      </StyledButton>
    </>
  );
}
