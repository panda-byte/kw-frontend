import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, shouldUpdate } from 'recompose';
import cuid from 'cuid';

import { Character } from 'components/Reading/styles';

import { makeSelectReviewMeanings, makeSelectReviewReadings } from 'shared/selectors';

import * as COLORS from 'shared/styles/colors';
import { Li, Link, Dl } from './styles';

VocabCard.propTypes = {
  color: PropTypes.oneOf(Object.keys(COLORS)),
  id: PropTypes.number.isRequired,
  meanings: PropTypes.array,
  readings: PropTypes.array,
};

VocabCard.defaultProps = {
  color: 'purple',
  meanings: [],
  readings: [],
};

function VocabCard({
  color, id, meanings, readings,
}) {
  return (
    <Li bgColor={color}>
      <Link plainLink to={`/vocabulary/entry/${id}`}>
        <Dl color={color}>
          <div className="reading">
            {readings.map(({ character }) => [
              <Character>{character}</Character>,
              <div key={cuid()} className="separator" />,
            ])}
          </div>
          <dd className="meaning">{meanings[0]}</dd>
        </Dl>
      </Link>
    </Li>
  );
}

const mapStateToProps = (state, props) => ({
  meanings: makeSelectReviewMeanings(props.id)(state),
  readings: makeSelectReviewReadings(props.id)(state),
});

export default compose(
  connect(mapStateToProps),
  shouldUpdate((props, nextProps) => props.id !== nextProps.id)
)(VocabCard);
