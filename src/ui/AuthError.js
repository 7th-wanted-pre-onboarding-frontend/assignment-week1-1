import styled from 'styled-components';

const AuthError = styled.p`
  font-size: 0.8rem;
  color: red;
  width: 100%;
  padding-left: 1.5rem;

  &:nth-child(4),
  :nth-child(5) {
    font-size: 0.6rem;
  }
`;

export default AuthError;
