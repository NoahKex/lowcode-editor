import { toUnderline } from '@/utils';
import styled from 'styled-components';

export const PageContainer = styled.div<{
  userStyles: Record<string, any>;
}>`
  min-height: 100%;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  ${(props) => {
    const { userStyles } = props;
    return Object.keys(userStyles).map((item) => `${toUnderline(item)}: ${userStyles[item]};`);
  }};
`;
