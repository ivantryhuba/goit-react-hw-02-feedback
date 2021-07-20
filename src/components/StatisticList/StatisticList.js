import React from 'react';
import PropTypes from 'prop-types';

import { StatisticListStyled } from './StatisticList.styles';
import { StatisticItem } from '../StatisticItem/StatisticItem';

export const StatisticList = ({ stateObj, total, positivePercentage }) => {
    return (
        <StatisticListStyled>
            {Object.keys(stateObj).map(stateProp => (
                <StatisticItem
                    key={stateProp}
                    label={stateProp}
                    value={stateObj[`${stateProp}`]}
                />
            ))}

            <StatisticItem key="total" label="total" value={total} />

            <StatisticItem
                key="positivePercentage"
                label="positive feedback"
                value={positivePercentage}
            />
        </StatisticListStyled>
    );
};

StatisticList.propTypes = {
    stateObj: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};

// good,
// neutral,
// bad,
// total,
// positivePercentage,
