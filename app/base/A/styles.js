import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { link, linkHover } from 'shared/styles/colors';
import { fastEaseQuad } from 'shared/styles/animation';

const plainStyles = `
  text-decoration: none;
  color: inherit;
`;

const linkStyles = `
  transition: all ${fastEaseQuad};
  color: ${link};
  &:hover {
    color: ${linkHover};
  }
`;

export const Anchor = styled.a`
  ${({ plainLink }) => plainLink ? plainStyles : linkStyles}
  cursor: pointer;
`;

export const ExternalAnchor = styled.a.attrs({
  target: '_blank',
  rel: 'external noopener noreferrer',
})`
  ${({ plainLink }) => plainLink ? plainStyles : linkStyles}
  cursor: pointer;
`;

export const RouterLink = styled(({ plainLink, colorHover, bgColor, bgColorHover, ...rest }) => <Link {...rest} />)``;
