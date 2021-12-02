import P from 'prop-types';
import './styles.css';

export const Button = ({ text, loadPosts, disabled = false }) => {
  return (
    <button disabled={disabled} className="btn" onClick={loadPosts}>
      {text}
    </button>
  );
};

Button.defaulProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  loadPosts: P.func.isRequired,
  disabled: P.bool,
};
