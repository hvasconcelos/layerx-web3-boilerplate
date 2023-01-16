import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.div`
  flex: 1;
  padding: 15px;
`;

export const NavBar = styled.div`
  padding: 15px;
  margin-left: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BrandName = styled.div`
    font-size: 1.4rem;
`;

export const Menu = styled.div`
`;


export const Footer = styled.div`
  flex: initial;
  padding: 10px;
  text-align: center;
  border-top: 1px solid #eee;
`;
