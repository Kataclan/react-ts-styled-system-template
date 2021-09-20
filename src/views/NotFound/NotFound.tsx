import React from 'react';
import styled from 'styled-components';
import { Flex } from 'ui/components/Box';
import { Page } from 'components';

const NotFoundWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

function NotFound() {
  return (
    <Page>
      <NotFoundWrapper>404</NotFoundWrapper>
    </Page>
  );
}

export default NotFound;
