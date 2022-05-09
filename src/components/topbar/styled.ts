import styled from 'styled-components';

export const TopBarContainer = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  height:50px;
  width: 320px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 30px;
  width: 127.5px;
  margin-left: 10px;
`;

export const Title = styled.p`
  height: 30px;
  width: 170px;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: #063078;
`;

export const HistoryContainer = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OperationContainer = styled.div`
  height: 50px;
  width: 350px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
