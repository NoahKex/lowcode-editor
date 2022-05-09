import { Switch, Button, Message } from '@arco-design/web-react';
import * as S from './styled';
import { useEditor } from '@craftjs/core';
import { IconRedo, IconUndo } from '@arco-design/web-react/icon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import lz from 'lzutf8';

const TopBar = () => {
  const { actions, query } = useEditor();

  return (
    <S.TopBarContainer>
      <S.LogoContainer >
        <S.Logo src="src/assets/logo.png" />
        <S.Title>行云低代码设计器</S.Title>
      </S.LogoContainer>
      <S.HistoryContainer >
        <Button type="secondary" icon={<IconUndo />} />
        <Button type="secondary" icon={<IconRedo />} />
      </S.HistoryContainer>
      <S.OperationContainer >
        <CopyToClipboard
          text={lz.encodeBase64(lz.compress(query.serialize()))}
          onCopy={(_, result) => {
            if (result) {
              Message.success('数据已成功保存到剪贴板！');
            } else {
              Message.error('数据保存到剪贴板失败！');
            }
          }}
        >
          <Button type="primary" style={{ marginRight: '10px' }}>保存</Button>
        </CopyToClipboard>
        <Button type="primary" style={{ marginRight: '5px' }}>预览</Button>
        <Button style={{ marginRight: '5px' }}>导入数据</Button>
      </S.OperationContainer>
    </S.TopBarContainer>
  );
};

export default TopBar;
