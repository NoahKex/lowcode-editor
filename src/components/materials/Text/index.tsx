// import * as S from './styled';

const Text = ({ text, fontSize }) => {
  return (
    <div>
      <p style={{ fontSize }}>{ text }</p>
    </div>
  );
};

export default Text;
