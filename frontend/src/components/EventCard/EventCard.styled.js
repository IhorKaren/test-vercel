import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.li`
  position: relative;

  list-style: none;
  padding: 10px;
  font-size: 13px;

  border: 2px solid gray;
  border-radius: 12px;
`;

const Title = styled.p`
  margin-left: 10px;
  font-weight: bold;
  font-size: large;
`;

const Button = styled.button`
  position: absolute;

  padding: 8px;
  bottom: 12px;
  left: 40px;

  background-color: #fff;
  border: none;
  color: blue;
`;

const StyledLink = styled(Link)`
  position: absolute;

  text-decoration: none;
  font-size: 14px;
  color: blue;

  padding: 8px;
  bottom: 12px;
  right: 40px;
`;

export { Item, Title, Button, StyledLink };
