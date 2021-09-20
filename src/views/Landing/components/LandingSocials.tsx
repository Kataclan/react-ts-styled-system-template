import React from 'react';
import styled from 'styled-components';
import { useMatchBreakpoints } from 'ui';
import { IconButton } from 'ui/components/Button';
import { GitbookIcon, GithubIcon, MediumIcon, TelegramIcon, TwitterIcon } from 'ui/components/Svg';

const LandingSocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 32px;
  }
`;

function LandingSocials() {
  const { isXl } = useMatchBreakpoints();
  return (
    <LandingSocialsWrapper>
      <IconButton as="a" variant="text" disabled style={{ width: isXl ? '40px' : '24px' }}>
        <GithubIcon width={isXl ? '40px' : '24px'} height={isXl ? '40px' : '24px'} />
      </IconButton>
      <IconButton
        as="a"
        variant="text"
        style={{ width: isXl ? '40px' : '24px', marginLeft: 24 }}
        href="https://twitter.com/ZeniProtocol"
      >
        <TwitterIcon width={isXl ? '40px' : '24px'} height={isXl ? '40px' : '24px'} />
      </IconButton>
      <IconButton
        as="a"
        variant="text"
        style={{ width: isXl ? '40px' : '24px', marginLeft: 24 }}
        external
        href="https://t.me/zeniprotocol"
      >
        <TelegramIcon width={isXl ? '40px' : '24px'} height={isXl ? '40px' : '24px'} />
      </IconButton>
      <IconButton
        as="a"
        variant="text"
        style={{ width: isXl ? '40px' : '24px', marginLeft: 24 }}
        external
        href="https://medium.com/@zeniprotocol"
      >
        <MediumIcon width={isXl ? '40px' : '24px'} height={isXl ? '40px' : '24px'} />
      </IconButton>
      <IconButton
        as="a"
        variant="text"
        style={{ width: isXl ? '40px' : '24px', marginLeft: 24 }}
        href="https://app.gitbook.com/@zeniprotocol/s/home/"
      >
        <GitbookIcon width={isXl ? '40px' : '24px'} height={isXl ? '40px' : '24px'} />
      </IconButton>
    </LandingSocialsWrapper>
  );
}

export default LandingSocials;
