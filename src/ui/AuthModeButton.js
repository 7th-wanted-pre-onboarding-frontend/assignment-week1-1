import styled from 'styled-components';

const AuthModeButton = styled.button`
  background-color: #007070;
  margin: 15px 20px;
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;

export default AuthModeButton;
