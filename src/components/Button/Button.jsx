import css from './Button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
