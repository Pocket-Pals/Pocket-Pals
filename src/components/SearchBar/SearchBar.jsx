import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import styled from "styled-components";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export default function SearchBar({
  handleChange = (e) => {},
  handleValue,
  handleClick = () => {},
}) {
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
