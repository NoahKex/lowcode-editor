// import styles from './index.module.css';

const Text = ({ text, fontSize }) => {
  return (
    <div>
      <p style={{ fontSize }}>{ text }</p>
    </div>
  );
};

export default Text;
