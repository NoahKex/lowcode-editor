import styled from 'styled-components';

export const RenderNodeContainer = styled.div<{
  height: number;
}>`
  width: auto;
  height: ${(props) => `${props.height}px`};
  display: flex;
  background-color: #6AA1FF;
  position: fixed;
  z-index: 999;
`;

export const RenderNodeNameContainer = styled.div`
  height: 100%;
  width: auto;
  padding: 0 5px;
  text-align: center;
  font-size: 13px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
`;

export const RenderNodeOperateContainer = styled.div`
  height: 100%;
  width: auto;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #FFFFFF;
  cursor: pointer;
`;
