import PropTypes from "prop-types";

const QuoteDisplay = ({ content, author }) => {
  return (
    <div className="quote-display">
      <blockquote>{content}</blockquote>
      <h3>-{author || "Неизвестный автор"}</h3>
    </div>
  );
};

QuoteDisplay.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default QuoteDisplay;
