// import styles from './index.module.css';
import { Button as MaterialButton } from '@arco-design/web-react';

const Button = ({ type, status, size, shape, text }) => {
  return (
    <MaterialButton type={type} status={status} size={size} shape={shape} >{text}</MaterialButton>
  );
};

export default Button;
