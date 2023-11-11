import styled, { css } from 'styled-components';

import StreakIcon from 'common/components/StreakIcon';
import IconButton from 'common/components/IconButton';

import { visuallyHidden } from 'common/styles/utils';
import { shadowBox, innerMedium } from 'common/styles/shadows';
import { kilo } from 'common/styles/typography';
import { gutter } from 'common/styles/layout';
import { fastEaseQuad } from 'common/styles/animation';
import { transparent, white, grey, yellow, red, green, orange, cyan } from 'common/styles/colors';
import { backgroundImageColor } from 'features/quiz/QuizSession/styles';

/* eslint-disable indent */
export const AnswerWrapper = styled.div`
  position: relative;
  display: flex;
  color: currentColor;
  background-color: ${white[2]};
  flex: 1;
  ${shadowBox}
`;

export const Form = styled.form`
  ${gutter()}
  ${kilo}
  background-color: ${backgroundImageColor};
  color: ${({ marked, valid }) => marked && valid ? white[3] : grey[9]};
  border: 0;
  border-radius: 0;
  outline: none;
  appearance: none;
  z-index: 2;

  & ${AnswerWrapper} {
    ${bgColorMixin}
  }
`;

export const Label = styled.label`
  ${visuallyHidden}
`;

export const Input = styled.input`
  ${kilo}
  display: block;
  flex: 1;
  margin: 0;
  outline: none;
  border: 0;
  line-height: 1.75;
  min-height: 1.9em;
  text-align: center;
  color: currentColor;
  box-shadow: ${innerMedium};
  background-color: inherit;
  transition: all ${fastEaseQuad};

  &&&:placeholder-shown {
    /* focused input placeholder text color */
    &::placeholder {
      color: ${white[7]};
    }
  }

  ${({ marked, valid }) => {
    const color = valid ? white[3] : grey[9];
    return marked && css`
      color: ${color}; /* Override Android / IE font color change */
      -webkit-text-fill-color: ${color};
      -webkit-opacity: 1; /* Override iOS opacity change affecting text & background color */

      /* Override browser-forced color */
      &&&::placeholder {
        color: ${color};
      }

      /* Override browser-forced color */
      &&&:placeholder-shown {
        color: ${color};
      }

      &&&:disabled {
        color: ${white[3]};
        -webkit-text-fill-color: ${white[3]};
        -webkit-opacity: 1;
        /* Override browser-forced color */
        &&&::placeholder {
         color: ${white[3]};
        }
      }
    `;
  }}

  &:focus {
    outline: none;
  }

  /*hide stupid X on IE*/
  &::-ms-clear {
    display: none;
  }
`;

const ActionButton = styled(IconButton)`
  ${kilo}
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: currentColor;
  background-color: ${transparent};
  transition: all ${fastEaseQuad};
  z-index: 2;
  opacity: .9;

  &:hover {
    opacity: 1;
  }
`;

export const SubmitButton = styled(ActionButton)`
  right: .1em;
`;

export const IgnoreButton = styled(ActionButton)`
  left: .1em;
`;

export const Streak = styled(StreakIcon)`
  display: block;
  position: absolute;
  top: 50%;
  left: .35em;
  opacity: .8;
  transform: translateY(-50%);
  transition: all ${fastEaseQuad};
  z-index: 2;
`;


function bgColorMixin({
  marked,
  valid,
  correct,
  incorrect,
  ignored,
  matchedSynonym,
}) {
    if (matchedSynonym) {
      return `background-color: ${cyan[10]};`;
    }
    if (marked && !valid) {
      return `background-color: ${yellow[7]};`;
    }
    if (ignored) {
      return `background-color: ${orange[4]};`;
    }
    if (correct) {
      return `background-color: ${green[5]};`;
    }
    if (incorrect) {
      return `background-color: ${red[5]};`;
    }
    return '';
}
