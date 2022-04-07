import styled from 'styled-components';

export const MaterialContainer = styled.div<{
  background: string;
  margin: string;
  padding: string;
  height: string;
  width: string;
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  boxShadow: string;
  boxShadowColor: string;
  opacity: number;
  cursor: string;
}>`
  height: ${(props) => `${props.height}`};
  width: ${(props) => `${props.width}`};
  box-sizing: border-box;
  margin: ${(props) => `${props.margin}`};
  padding: ${(props) => `${props.padding}`};
  background: ${(props) => props.background};
  border-width: ${(props) => `${props.borderWidth}`};
  border-color: ${(props) => props.borderColor};
  border-style: ${(props) => `${props.borderStyle}`};
  box-shadow: ${(props) => `${props.boxShadowColor} ${props.boxShadow}`};
  opacity: ${(props) => `${props.opacity / 100}`};
  cursor: ${(props) => `${props.cursor}`};
  position: relative;
`;

export const BlankContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  background-color: #E9E9E9;
  box-sizing: border-box;
  border: 1px dashed #A9B1BC;
  font-size: 13px;
  color: #A9AEB8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
