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
  background-color: ${(props) => props.backgroundColor || "#f0f2f5"};
  padding: ${(props) => props.padding || "0.1rem 0.8rem"};
  border-radius: 0.3rem;
  width: ${(props) => props.width || "auto"};
  justify-content: center;
  font-size: 0.8rem;
  gap: ${(props) => props.gap || "0"};
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

export const FullContainer = styled.div`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
`;

export const Container = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  max-width: ${(props) => props.maxWidth || "none"};
  @media (max-width: 1025px) {
    flex-direction: ${(props) => props.flexDirectionMobile || "column"};
    padding: ${(props) => props.paddingMobile || "0"};
    margin: ${(props) => props.marginMobile || "0"};
    align-items: ${(props) => props.alignItemsMobile || "center"};
    justify-content: ${(props) => props.justifyContentMobile || "center"};
    gap: ${(props) => props.gapMobile || "0"};
  }
`;

export const Ul = styled.ul`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const Li = styled.li`
  list-style: none;
`;

export const CardConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  @media (max-width: 1593px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1323px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap || "0"};
`;
