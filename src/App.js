import React from "react";
import PropTypes from "prop-types";

import { FeedbackBtn } from "./components/FeedbackBtn/FeedbackBtn";

export default function App() {
  return (
    <div>
      <FeedbackBtn options={["good", "neutral", "bad"]} />
    </div>
  );
}
