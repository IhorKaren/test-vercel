import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  margin-left: 20px;
  margin-bottom: 0;

  font-size: 26px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, 80px);
  grid-gap: 1rem;

  padding: 20px;
  margin: 0;
`;

const BackLink = styled(Link)`
  display: inline-block;

  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 16px;
  padding: 8px 16px;

  text-decoration: none;

  background-color: lightgray;
  color: white;
  border-radius: 4px;

  &:hover {
    background-color: gray;
  }
`;

export { Title, List, BackLink };
