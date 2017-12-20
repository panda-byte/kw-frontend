import styled from 'styled-components';

import { resetList } from 'shared/styles/utils';
import { gutter } from 'shared/styles/layout';

export const Ul = styled.ul`
  ${resetList}
  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  flex-flow: column nowrap;
`;

export const ReadingContent = styled.div`
  ${gutter()}
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;