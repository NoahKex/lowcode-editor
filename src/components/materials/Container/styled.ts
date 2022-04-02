import styled from 'styled-components';

export const MaterialContainer = styled.div<{
  background: string;
  padding: number;
  height: number;
  width: number;
}>`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  box-sizing: border-box;
  padding: ${(props) => `${props.padding}px`};
  background: ${(props) => props.background};
`;
