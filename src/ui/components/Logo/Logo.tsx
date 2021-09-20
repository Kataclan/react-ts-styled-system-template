import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from '../Box';
import { ZeniIcon } from '../Svg';
import { Heading } from '../Heading';

interface Props {
  href?: string;
}

// const blink = keyframes`
//   0%,  100% { transform: scaleY(1); }
//   50% { transform:  scaleY(0.1); }
// `;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon,
  .desktop-icon {
    width: 32px;
  }
  .mobile-icon {
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon-wrapper {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: flex;
    }
  }
`;

const Logo: React.FC<Props> = ({ href = '/' }) => {
  const innerLogo = (
    <>
      <ZeniIcon className="mobile-icon" />
      <Flex alignItems="center" className="desktop-icon-wrapper">
        <ZeniIcon className="desktop-icon" />
        <Heading ml={2}>zeni protocol</Heading>
      </Flex>
    </>
  );

  return (
    <Flex>
      <StyledLink to={href} aria-label={`Zeni Protocol`}>
        {innerLogo}
      </StyledLink>
    </Flex>
  );
};

export default Logo;
