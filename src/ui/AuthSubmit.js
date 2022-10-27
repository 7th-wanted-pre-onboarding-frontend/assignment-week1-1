import styled from 'styled-components';

const AuthSubmit = styled.button`
  margin: 10px 20px 20px;
  width: 200px;
  height: 30px;
  background-color: #00a0a0;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;

export default AuthSubmit;
