import styled from 'styled-components';

export const ColorBox = styled.div<{
  currentColor: string;
}>`
  height: 20px;
  width: 20px;
  margin: -5px;
  border: 1px solid #ABABAC;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${(props) => props.currentColor ?? '#ffffff'};;
`;
