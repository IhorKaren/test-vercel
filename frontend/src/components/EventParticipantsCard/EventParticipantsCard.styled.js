import styled from 'styled-components';

const Item = styled.li`
  position: relative;

  list-style: none;
  padding: 10px;
  font-size: 13px;

  border: 2px solid gray;
  border-radius: 12px;
`;

const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: large;
`;
const Text = styled.p`
  margin: 0;
  font-size: large;
`;

export { Item, Title, Text };
