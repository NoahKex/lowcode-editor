import { useEditor, Frame } from '@craftjs/core';

const PreviewFrame = ({ data }: {data: string}) => {
  const { actions } = useEditor();
  setTimeout(() => {
    actions.setOptions((options) => { options.enabled = false; });
  }, 0);

  return (
    <Frame data={data} />
  );
};

export default PreviewFrame;
