import { Link } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #dbdbdb;
`;
const Logo = styled.div`
font-size: 30px;
`;

export const Header = () => {
  return (
    <Headers>
      <Link to="/">
        <Logo>home</Logo>
      </Link>
    </Headers>
  );
};
