import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, 270px);
  grid-gap: 1rem;

  padding: 20px;
  margin: 0;
`;

export { List };
