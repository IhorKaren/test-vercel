import styled from 'styled-components';

const Title = styled.h1`
  margin-left: 20px;
  margin-bottom: 0;

  font-size: 32px;
`;

const PaginationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;

  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: blue;
  }
`;

export { Title, PaginationContainer, PaginationButton };
