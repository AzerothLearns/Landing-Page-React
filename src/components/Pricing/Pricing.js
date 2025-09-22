import React from 'react';
import { Button } from '../../globalStyles';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaBullhorn } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  const { t } = useTranslation();

  return (
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>{t('pricing.ourServices')}</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineSetting color='#4B59F7' size={64} />
                </PricingCardIcon>
                <PricingCardPlan>{t('pricing.businessProcess')}</PricingCardPlan>
                <ul>
                  <PricingCardFeature>{t('pricing.streamline')}</PricingCardFeature>
                  <PricingCardFeature>{t('pricing.eliminate')}</PricingCardFeature>
                  <PricingCardFeature>{t('pricing.boost')}</PricingCardFeature>
                </ul>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaBullhorn color='#4B59F7' size={64} />
                </PricingCardIcon>
                <PricingCardPlan>{t('pricing.marketingSales')}</PricingCardPlan>
                <ul>
                  <PricingCardFeature>{t('pricing.automateLead')}</PricingCardFeature>
                  <PricingCardFeature>{t('pricing.emailCampaigns')}</PricingCardFeature>
                  <PricingCardFeature>{t('pricing.salesFollowUps')}</PricingCardFeature>
                </ul>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaHeadset color='#4B59F7' size={64} />
                </PricingCardIcon>
                <PricingCardPlan>{t('pricing.customerSupport')}</PricingCardPlan>
                <ul>
                  <PricingCardFeature>{t('pricing.automatedTicketing')}</PricingCardFeature>
                  <PricingCardFeature>{t('pricing.chatbots')}</PricingCardFeature>
                  <PricingCardFeature>{t('pricing.responseSystems')}</PricingCardFeature>
                </ul>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
  );
}

export default Pricing