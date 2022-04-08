import { toUnderline } from '@/utils';
import styled from 'styled-components';

export const MaterialContainer = styled.div<{
  userStyles: Record<string, any>;
}>`
  box-sizing: border-box;
  position: relative;
  ${(props) => {
    const { userStyles } = props;
    return Object.keys(userStyles).map((item) => `${toUnderline(item)}: ${userStyles[item]};`);
  }};
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
