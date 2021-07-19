import React from "react";

import { Container } from "./components/Container/Container";
import { FeedbackBtn } from "./components/FeedbackBtn/FeedbackBtn";
import { Notification } from "./components/Notification/Notification";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";

import { H1Styled } from "./App.styles";

class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  increment = (event) => {
    this.setState((prevState) => {
      const { target } = event;
      const value = target.textContent.toLowerCase();
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  totalCountFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  positivePercentage = (good, neutral, bad) => {
    let total = good + neutral + bad;
    let percentage = ((good / total) * 100).toFixed(0);
    return percentage;
  };

  render() {
    const { increment, totalCountFeedback, positivePercentage } = this;
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <H1Styled>Feedback Service</H1Styled>
        <Section title={"Please leave your feedback"}>
          <FeedbackBtn
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={increment}
          />
        </Section>

        <Section title={"Statistics"}>
          {totalCountFeedback(good, neutral, bad) < 1 ? (
            <Notification text={"No feedback given"} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCountFeedback(good, neutral, bad)}
              positivePercentage={positivePercentage(good, neutral, bad)}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
