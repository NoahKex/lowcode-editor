import { Button, Message, Modal, Input } from '@arco-design/web-react';
import * as S from './styled';
import { useEditor } from '@craftjs/core';
import { IconRedo, IconUndo } from '@arco-design/web-react/icon';
import copy from 'copy-to-clipboard';
import lz from 'lzutf8';
import { useState } from 'react';

const { TextArea } = Input;

const TopBar = () => {
  const { actions, query } = useEditor();
  const [loadDataVisible, setLoadDataVisible] = useState(false);
  const [inputData, setInputData] = useState('');
  return (
    <>
      <S.TopBarContainer>
        <S.LogoContainer>
          <S.Logo src="src/assets/logo.png" />
          <S.Title>行云低代码设计器</S.Title>
        </S.LogoContainer>
        <S.HistoryContainer>
          <Button type="secondary" icon={<IconUndo />} />
          <Button type="secondary" icon={<IconRedo />} />
        </S.HistoryContainer>
        <S.OperationContainer>
          <Button
            type="primary"
            style={{ marginRight: '10px' }}
            onClick={() => {
              const copyStatus = copy(lz.encodeBase64(lz.compress(query.serialize())));
              if (copyStatus) {
                Message.success('数据已成功保存到剪贴板！');
              } else {
                Message.error('数据保存到剪贴板失败！');
              }
            }}
          >保存
          </Button>
          <Button type="primary" style={{ marginRight: '5px' }}>预览</Button>
          <Button style={{ marginRight: '5px' }} onClick={() => setLoadDataVisible(true)}>导入数据</Button>
        </S.OperationContainer>
      </S.TopBarContainer>
      <Modal
        title="导入数据"
        visible={loadDataVisible}
        onOk={() => {
          setLoadDataVisible(false);
          actions.deserialize(lz.decompress(lz.decodeBase64(inputData)));
          Message.success('数据已成功导入设计器！');
        }}
        onCancel={() => setLoadDataVisible(false)}
      >
        <TextArea
          value={inputData}
          placeholder="请粘贴序列化数据到文本框中"
          style={{ minHeight: '100px', width: '100%' }}
          onChange={(val) => {
            setInputData(val);
          }}
        />
      </Modal>
    </>
  );
};

export default TopBar;
