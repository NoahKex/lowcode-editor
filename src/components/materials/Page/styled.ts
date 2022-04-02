import styled from 'styled-components';

export const PageContainer = styled.div<{
  backgroundColor: string;
  padding: number;
}>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: ${(props) => `${props.padding}px`};
  background-color: ${(props) => props.backgroundColor};
`;
