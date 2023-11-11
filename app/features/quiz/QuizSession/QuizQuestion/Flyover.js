import React from 'react';
import PropTypes from 'prop-types';

import getSrsRankName from 'common/utils/getSrsRankName';
import Icon from 'common/components/Icon';
import StreakIcon from 'common/components/StreakIcon';
import { SRS_RANKS } from 'common/constants';
import { white, orange, SRS_COLORS, cyan } from 'common/styles/colors';
import { FlyoverWrapper, FlyoverContent } from './styles';

Flyover.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).isRequired,
  isIgnored: PropTypes.bool.isRequired,
};

export const IGNORED = 'IGNORED';
export const MATCHED_SYNONYM = 'MATCHED_ANSWER'

const getChanges = (isIgnored, matchedSynonym, from, to) => {
  if (matchedSynonym) {
    return {
      toName: MATCHED_SYNONYM,
      label: "This answer is incorrect, but your answer matches a similar vocabulary!",
      hasChanged: true,
      animateUp: true,
      bgColor: cyan[10],
      color: white[1],
    };
  }
  if (isIgnored) {
    return {
      toName: IGNORED,
      hasChanged: true,
      animateUp: true,
      bgColor: orange[4],
      color: white[1],
    };
  }
  const [fromName, toName] = [from, to].map(getSrsRankName);
  return {
    toName,
    hasChanged: fromName !== toName && toName !== SRS_RANKS.ZERO,
    animateUp: to > from,
    color: SRS_COLORS[toName],
    bgColor: white[2],
  };
};

const renderIcon = (toName) => {
  if (toName === IGNORED) {
    return <Icon name="ATTENTION" title="Answer Ignored" size="1.25em" />;
  } else if (toName === MATCHED_SYNONYM) {
    return <Icon name="INFO" title="Matched Synonym" size="1.25em" />;
  } else {
    return <StreakIcon streakName={toName} size="1.25em" />;
  }
}

function Flyover({ isIgnored, matchedSynonym, from, to }) {
  const { toName, label, ...styleProps } = getChanges(isIgnored, matchedSynonym, from, to);
  return (
    <FlyoverWrapper>
      <FlyoverContent capitalize={!matchedSynonym} {...styleProps}>
        <span>{renderIcon(toName)}</span>
        <span>{label ? label : toName.toLowerCase()}</span>
      </FlyoverContent>
    </FlyoverWrapper>
  );
}

export default Flyover;
