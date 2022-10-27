import styled from 'styled-components';

const TodoInner = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  top: 20vh;
  left: calc(50% - 392px / 2);
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 0 0.3rem 0.05rem #cccccc;
`;

export default TodoInner;
