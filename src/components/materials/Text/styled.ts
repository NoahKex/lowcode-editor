import { toUnderline } from '@/utils';
import styled from 'styled-components';

export const TextContainer = styled.p<{
  userStyles: Record<string, any>;
}>`
  box-sizing: border-box;
  ${(props) => {
    const { userStyles } = props;
    return Object.keys(userStyles).map((item) => `${toUnderline(item)}: ${userStyles[item]};`);
  }};
`;
