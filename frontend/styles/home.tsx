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
  flex: initial;
  margin-left: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
`;

export const BrandName = styled.div`
  flex: initial;
  position: relative;
  top: 4px;
`;

export const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

