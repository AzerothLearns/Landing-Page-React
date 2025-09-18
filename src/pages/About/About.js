import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutContainer, AboutRow, AboutColumn, AboutHeading, OfficeImage, AboutText } from './About.elements';

function About() {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <AboutRow>
        <AboutColumn>
          <AboutHeading>{t('about.aboutUsTitle')}</AboutHeading>
          <AboutText>{t('about.description')}</AboutText>
        </AboutColumn>
        <AboutColumn>
          <OfficeImage src={require('../../images/Office 2.jpg')} alt="Office" />
        </AboutColumn>
      </AboutRow>
    </AboutContainer>
  );
}

export default About;