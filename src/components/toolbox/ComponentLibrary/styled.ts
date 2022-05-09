import styled from 'styled-components';

export const ComponentLibraryContainer = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px;
`;

export const MaterialIcon = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 5px;
  vertical-align: middle;
`;

export const ToolTitle = styled.p`
  height: 15px;
  font-size: 16px;
  color: #2E2E30;
  margin-bottom: -5px;
`;

export const SortTitle = styled.p`
  height: 20px;
  width: 100%;
  line-height: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #4E5969;
`;

export const CoverBoxContainer = styled.div`
  height: 30px;
  overflow: 'hidden';
  background-color: #E8F3FF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ComponentTitle = styled.p`
  height: 18px;
  width: 100%;
  font-size: 12px;
  color: #1d2129;
`;

export const ComponentDescription = styled.p`
  height: 40px;
  width: 100%;
  font-size: 12px;
  color: #949ba5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
