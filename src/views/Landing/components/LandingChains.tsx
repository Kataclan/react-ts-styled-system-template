import React from 'react';
import styled from 'styled-components';
import { useMatchBreakpoints } from 'ui';
import { EthereumIcon, BinanceIcon, PolkadotIcon, PolygonIcon, SolanaIcon } from 'ui/components/Svg';

const LandingChainsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 56px;
`;

function LandingChains() {
  const { isXl } = useMatchBreakpoints();
  return (
    <LandingChainsWrapper>
      <PolygonIcon width={isXl ? '64px' : '48px'} height={isXl ? '64px' : '48px'} />
      <BinanceIcon disabled width={isXl ? '64px' : '48px'} height={isXl ? '64px' : '48px'} />
      <PolkadotIcon disabled width={isXl ? '64px' : '48px'} height={isXl ? '64px' : '48px'} />
      <EthereumIcon width={isXl ? '56px' : '40px'} height={isXl ? '56px' : '40px'} />
      <SolanaIcon disabled width={isXl ? '64px' : '42px'} height={isXl ? '28px' : '20px'} />
    </LandingChainsWrapper>
  );
}

export default LandingChains;
