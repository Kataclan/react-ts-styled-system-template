import React from 'react';
import { LandingContainer, Page } from 'components';
import { useTranslation } from 'hooks';
import styled from 'styled-components';
import { Heading } from 'ui/components/Heading';
import { Text } from 'ui/components/Text';
import LandingSocials from './components/LandingSocials';
import LandingChains from './components/LandingChains';
import { Image } from 'ui/components/Image';
import { useMatchBreakpoints } from 'ui';

const LandingPage = styled(Page)`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 16px;

  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 910px;
    background: url('/img/landing/chinatown.png');
    background-repeat: no-repeat;
    background-position: center 24px, center;
    background-size: 852px 852px;
    max-width: 851px;
  }
`;

const LandingHeading = styled(Heading)`
  padding-top: 110px;
  width: 100%;
  display: flex;
  alignitems: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 100px;
    max-width: 500px;
    height: 210px;
  }
`;

const LandingTempleWrapper = styled(LandingContainer)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const LandingPageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 48px;
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 500px;
    margin: 0;
    height: 200px;
    flex-wrap: wrap;
  }
`;

const LotusTL = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-20px, -30px) rotate(55deg);
  ${({ theme }) => theme.mediaQueries.lg} {
    top: 150px;
    transform: translate(-150px, 0px) rotate(-25deg);
  }
`;

const LotusTR = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30px, -20px) rotate(-105deg);
  ${({ theme }) => theme.mediaQueries.lg} {
    transform: translate(160px, 0px) rotate(-105deg);
  }
`;

const LotusBL = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50px, 10px);
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    top: calc(100% - 340px);
    transform: translate(-50px, 50px);
  }
`;

const LotusBR = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(90px, 30px) rotate(-105deg);
  ${({ theme }) => theme.mediaQueries.lg} {
    top: calc(100% - 340px);
    transform: translate(70px, 0px) rotate(45deg);
  }
`;

const LotusTC = styled(Image)`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    position: absolute;
    top: 0;
    left: calc(100% - 450px);
    transform: translate(160px, -30px) rotate(-105deg);
  }
`;

const CoinBR = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(70px, -100px) rotate(-16deg) scaleX(-1);
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    top: 50%;
    right: 0;
    transform: translate(190px, 0px) rotate(4deg);
  }
`;

const CoinTL = styled(Image)`
  position: absolute;
  top: 0;
  left: 45px;
  transform: translate(-20px, -30px) rotate(75deg);
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    top: 45px;
    transform: translate(-180px, 0px) rotate(-2deg);
  }
`;

function Landing() {
  const { t } = useTranslation();
  const { isXl: isDesktop } = useMatchBreakpoints();
  return (
    <LandingPage>
      <LotusTL width={isDesktop ? 180 : 90} height={isDesktop ? 180 : 90} src="/img/landing/lotus-180x180.svg" />
      <CoinTL width={isDesktop ? 220 : 110} height={isDesktop ? 180 : 90} src="/img/landing/coin-220x180.png" />
      <LotusTR width={isDesktop ? 210 : 105} height={isDesktop ? 210 : 105} src="/img/landing/lotus-160x160.svg" />
      <LotusBL width={isDesktop ? 160 : 110} height={isDesktop ? 160 : 110} src="/img/landing/lotus-160x160.svg" />
      <LotusBR width={isDesktop ? 220 : 150} height={isDesktop ? 220 : 150} src="/img/landing/lotus-180x180.svg" />
      <CoinBR width={isDesktop ? 260 : 130} height={isDesktop ? 232 : 116} src="/img/landing/coin-260x231.png" />
      <LotusTC width={isDesktop ? 110 : 55} height={isDesktop ? 110 : 55} src="/img/landing/lotus-180x180.svg" />
      <LandingTempleWrapper>
        <LandingPageContentWrapper>
          <LandingHeading scale="xl">{t('Zeni Gaming HUB')}</LandingHeading>
          <SubtitleWrapper>
            <Text as="h2" variant="heading2">
              {t('Play-to-earn & Utility NFTs')}
            </Text>
            <Text as="h2" variant="heading2">
              {t('Stake, Farm, Invest, Trade ZENI')}
            </Text>
          </SubtitleWrapper>
          <LandingSocials />
          <LandingChains />
        </LandingPageContentWrapper>
      </LandingTempleWrapper>
    </LandingPage>
  );
}

export default Landing;
