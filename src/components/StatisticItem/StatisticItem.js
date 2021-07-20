import React from 'react';
import PropTypes from 'prop-types';

import { StatisticItemStyled, StatisticLabel } from './StatisticItem.styles';

export const StatisticItem = ({ label, value }) => {
    return (
        <StatisticItemStyled>
            <StatisticLabel>{label}</StatisticLabel> : {value}
        </StatisticItemStyled>
    );
};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
