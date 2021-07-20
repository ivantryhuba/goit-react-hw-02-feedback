import React from 'react';

import { Container } from './components/Container/Container';
import { FeedbackBtn } from './components/FeedbackBtn/FeedbackBtn';
import { Notification } from './components/Notification/Notification';
import { Section } from './components/Section/Section';
import { StatisticList } from './components/StatisticList/StatisticList';

import { H1Styled } from './App.styles';

class App extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    };

    increment = event => {
        this.setState(prevState => {
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
        return `${percentage}%`;
    };

    render() {
        const { increment, totalCountFeedback, positivePercentage } = this;
        const { good, neutral, bad } = this.state;

        return (
            <Container>
                <H1Styled>Feedback Service</H1Styled>
                <Section title={'Please leave your feedback'}>
                    <FeedbackBtn
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={increment}
                    />
                </Section>

                <Section title={'Statistics'}>
                    {totalCountFeedback(good, neutral, bad) < 1 ? (
                        <Notification text={'No feedback given'} />
                    ) : (
                        <StatisticList
                            stateObj={this.state}
                            total={totalCountFeedback(good, neutral, bad)}
                            positivePercentage={positivePercentage(
                                good,
                                neutral,
                                bad,
                            )}
                        />
                    )}
                </Section>
            </Container>
        );
    }
}

export default App;
