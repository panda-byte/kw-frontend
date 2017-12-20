import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  line-height: 1;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const Furi = styled.div`
  font-size: 0.95em;
  letter-spacing: -0.025em;
  padding-bottom: 0.1em;
  opacity: ${({ isVisible }) => (isVisible ? 0.8 : 0)};
`;

export const Chars = styled.div`
  font-size: 2.3em;
`;