import { Button, Message, Modal, Input } from '@arco-design/web-react';
import * as S from './styled';
import { useEditor } from '@craftjs/core';
import { IconRedo, IconUndo } from '@arco-design/web-react/icon';
import copy from 'copy-to-clipboard';
import lz from 'lzutf8';
import { useState } from 'react';
import { DESIGNER_DATA } from '@/constants';
import { useHistory } from 'ice';

const { TextArea } = Input;

const TopBar = () => {
  const { actions, query } = useEditor();
  const history = useHistory();
  const { history: historyOption } = actions;
  const { history: historyStatus } = query;
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
          <Button title="撤销" disabled={!historyStatus.canUndo()} type="secondary" icon={<IconUndo />} onClick={() => historyOption.undo()} />
          <Button title="重做" disabled={!historyStatus.canRedo()} type="secondary" icon={<IconRedo />} onClick={() => historyOption.redo()} />
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
          <Button
            type="primary"
            style={{ marginRight: '5px' }}
            onClick={() => {
              window.open(`/preview?designer_data=${encodeURIComponent(lz.encodeBase64(lz.compress(query.serialize())))}`);
            }}
          >预览
          </Button>
          <Button
            status="danger"
            style={{ marginRight: '5px' }}
            onClick={() => {
              Modal.confirm({
                title: '提示',
                content:
                  '确认要删除当前设计器所配置的数据吗（此操作将清空设计器画布，请再次确认）',
                okButtonProps: { status: 'danger' },
                onOk: () => {
                  actions.deserialize(lz.decompress(lz.decodeBase64(DESIGNER_DATA)));
                  Message.success('设计器数据已清空！');
                },
              });
            }}
          >清空数据
          </Button>
          <Button
            style={{ marginRight: '5px' }}
            onClick={() => {
              setInputData('');
              setLoadDataVisible(true);
            }}
          >导入数据
          </Button>
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
