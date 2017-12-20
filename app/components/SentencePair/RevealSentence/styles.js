import styled from "styled-components";

import P from "base/P";
import Icon from "components/Icon";

import { gutter } from "shared/styles/layout";
import { borderRadius } from "shared/styles/sizing";
import { greyDark, transparent } from "shared/styles/colors";
import { fastEaseQuad, midEaseQuad } from "shared/styles/animation";

export const RevealIcon = styled(Icon)`
  position: absolute;
  ${gutter({ prop: "margin", position: "top", mod: 0.5 })} left: 50%;
  top: 0;
  opacity: 1;
  transition: opacity ${fastEaseQuad};
  transform: translate(-50%, 0);
  z-index: 1;
  color: ${greyDark};
`;

export const Sentence = P.extend`
  position: relative;
  display: inline-flex;
  font-size: 1.1em;
  font-style: italic;
  line-height: 1.2;
  transition: all ${fastEaseQuad};
  border-radius: ${borderRadius};
  /* blur effect */
  color: ${transparent};
  text-shadow: 0 0 0.8em rgba(0, 0, 0, 0.4);
  &:hover,
  &:active,
  &:focus {
    transition: all ${midEaseQuad};
    outline: none;
    color: ${greyDark};
    text-shadow: none;
    & ${RevealIcon} {
      transition: opacity ${midEaseQuad};
      opacity: 0;
    }
  }
`;