import React from 'react';
import { Button } from '../../globalStyles';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaBullhorn } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
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
  return (
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineSetting color='#4B59F7' size={64} />
                </PricingCardIcon>
                <PricingCardPlan>Business Process Automation</PricingCardPlan>
                <ul>
                  <PricingCardFeature>Streamline workflows</PricingCardFeature>
                  <PricingCardFeature>Eliminate repetitive tasks</PricingCardFeature>
                  <PricingCardFeature>Boost efficiency and productivity</PricingCardFeature>
                </ul>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaBullhorn color='#4B59F7' size={64} />
                </PricingCardIcon>
                <PricingCardPlan>Marketing & Sales Automation</PricingCardPlan>
                <ul>
                  <PricingCardFeature>Automate lead generation</PricingCardFeature>
                  <PricingCardFeature>Email campaigns</PricingCardFeature>
                  <PricingCardFeature>Sales follow-ups</PricingCardFeature>
                </ul>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaHeadset color='#4B59F7' size={64} />
                </PricingCardIcon>
                <PricingCardPlan>Customer Support Automation</PricingCardPlan>
                <ul>
                  <PricingCardFeature>Automated ticketing</PricingCardFeature>
                  <PricingCardFeature>Chatbots</PricingCardFeature>
                  <PricingCardFeature>Response systems</PricingCardFeature>
                </ul>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
  );
}

export default Pricing