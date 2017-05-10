import styled from 'styled-components';

import { resetList } from 'shared/styles/utils';
import { elementGutter } from 'shared/styles/layout';

export const Ul = styled.ul`
  ${resetList}
  ${elementGutter}
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  align-content: center;
`;
