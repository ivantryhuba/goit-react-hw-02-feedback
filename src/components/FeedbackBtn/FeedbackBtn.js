import React from "react";
import PropTypes from "prop-types";

import { ButtonList, ButtonItem, ButtonElem } from "./FeedbackBtn.styles";

export const FeedbackBtn = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option) => (
        <ButtonItem key={option}>
          <ButtonElem type="button" onClick={onLeaveFeedback}>
            {option}
          </ButtonElem>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
