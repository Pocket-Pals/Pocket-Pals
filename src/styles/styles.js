import styled from "styled-components";
import { Typography } from "antd";

export const GrandParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1rem;
`;

export const Parent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  line-height: 0;
  width: ${(props) => props.width || null};
`;

export const Child = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  padding: 0.1rem 0.8rem;
  border-radius: 0.3rem;
  width: ${(props) => props.width || "auto"};
  justify-content: center;
  font-size: 0.8rem;
`;

export const Type = styled(Typography.Text)`
  color: ${(props) => props.color || "#272727"};
  font-size: ${(props) => props.size || "0.8rem"};
  font-weight: ${(props) => props.weight || "400"};
  text-transform: ${(props) => props.transform || "none"};
  text-align: ${(props) => props.align || "left"};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "auto"};
`;
