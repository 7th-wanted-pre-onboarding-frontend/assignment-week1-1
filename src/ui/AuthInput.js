import styled from 'styled-components';

const AuthInput = styled.input`
  margin: 10px 20px 10px;
  padding: 10px;
  width: 200px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 0.9rem;
  outline: none;

  &:focus {
    border: 1px solid #00a0a0;
  }

  &:nth-child(1) {
    margin: 20px 20px 10px;
  }
`;

export default AuthInput;
