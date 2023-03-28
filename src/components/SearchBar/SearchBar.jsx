import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import styled from "styled-components";
const { Search } = Input;
import { useRef, useEffect } from "react";

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SearchBtn = styled(Search)`
  background-color: #f67837;
`;

export default function SearchBar({
  handleChange = (e) => {},
  handleValue,
  handleClick = () => {},
}) {
  const searchBtn = useRef(null);

  // searchBtn.current.style.backgroundColor = "#f67837";

  return (
    <>
      <SearchContainer className="search-container">
        <Space direction="vertical">
          <Search
            placeholder="Search for pets"
            enterButton
            onChange={(e) => handleChange(e)}
            value={handleValue}
            onSearch={handleClick}
          />
        </Space>
      </SearchContainer>
    </>
  );
}
