import React from "react";
import PropTypes from "prop-types";

export const FeedbackBtn = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(({ option, index }) => (
        <li key={index}>
          <button type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
