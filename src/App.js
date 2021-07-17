import React from "react";
import PropTypes from "prop-types";

import { FeedbackBtn } from "./components/FeedbackBtn/FeedbackBtn";
import { Notification } from "./components/Notification/Notification";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";

class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment(evt) {
    this.setState();
  }

  render() {
    return (
      <>
        <Section title={"Please leave your feedback"}>
          <FeedbackBtn
            options={["good", "neutral", "bad"]}
            onClick={this.increment}
          />
        </Section>

        <Section title={"Statistics"}>
          <Statistics />
          <Notification text={"No feedback given"} />
        </Section>
      </>
    );
  }
}

export default App;
