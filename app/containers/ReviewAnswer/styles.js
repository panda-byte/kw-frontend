import styled, { css } from 'styled-components';
import { placeholder } from 'polished';

import Icon from 'components/Icon';
import IconButton from 'components/IconButton';

import { visuallyHidden } from 'shared/styles/utils';
import { shadowBox, innerMedium } from 'shared/styles/shadows';
import { mega } from 'shared/styles/typography';
import { media } from 'shared/styles/media';
import { transparent, white, whiteLight, whiteDark, yellowOrange, red, green, black } from 'shared/styles/colors';

const bgColorMixin = ({ marked, valid, incorrect, correct }) => {
  if (marked && !valid) {
    return `background-color: ${yellowOrange};`;
  }
  if (incorrect) {
    return `background-color: ${red};`;
  }
  if (correct) {
    return `background-color: ${green};`;
  }
  return false;
};

export const AnswerWrapper = styled.div`
  position: relative;
  color: currentColor;
  background-color: ${whiteLight};
  transition: all 150ms ease-in-out;
  ${shadowBox}
  ${bgColorMixin}
`;

export const Form = styled.form`
  ${mega}
  position: relative;
  max-width: 100%;
  color: ${({ marked }) => marked ? white : black};
  background-color: ${transparent};
  margin: 0 0 .4rem;
  border: 0;
  border-radius: 0;
  outline: none;
  appearance: none;
  z-index: 2;
  ${media('min').sm`
    margin: .4rem;
  `}
`;

export const Label = styled.label`
  ${visuallyHidden}
`;

export const Input = styled.input`
  ${mega}
  display: block;
  width: 100%;
  margin: 0;
  outline: none;
  border: 0;
  line-height: 1.75;
  text-align: center;
  color: currentColor;
  box-shadow: ${innerMedium};
  background-color: inherit;

  /* leave some space for streak icon / submit button */
  padding-left: 30px;
  padding-right: 40px;

  &:placeholder-shown {
    ${placeholder({ color: whiteDark })} /* focused input placeholder text color */
  }

  ${({ marked }) => marked && css`
    color: ${white}; /* Override Android / IE font color change */
    -webkit-opacity: 1; /* Override iOS opacity change affecting text & background color */
    ${placeholder({ color: white })} /* Override browser-forced color */
    &:placeholder-shown {
      ${placeholder({ color: white })} /* Override browser-forced color */
    }
  `}

  &:focus {
    outline: none;
  }

  /*hide stupid X on IE*/
  &::-ms-clear {
    display: none;
  }
`;

export const StreakIcon = styled(Icon)`
  display: block;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: .35em;
`;

export const ActionButtons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

const ActionButton = styled(IconButton)`
  height: 100%;
  align-self: center;
  color: currentColor;
  background-color: ${transparent};

  &:hover {
    opacity: 1;
  }
`;

export const SubmitButton = ActionButton;
export const IgnoreButton = styled(ActionButton)`
 opacity: .5;
`;