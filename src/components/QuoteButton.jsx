import PropTypes from "prop-types";

const QuoteButton = ({ onClick }) => {
  return (
    <button className="quote-button" onClick={onClick}>
      Сгенерировать цитату
    </button>
  );
};

QuoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default QuoteButton;
