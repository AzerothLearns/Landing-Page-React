import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FormTextarea,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiry: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Inquiry sent successfully!');
        setFormData({ name: '', company: '', email: '', inquiry: '' });
      } else {
        alert('Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send inquiry. Please try again.');
    }
  };

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>{t('footer.contactUs')}</FooterSubHeading>
        <FooterSubText>{t('footer.sendInquiry')}</FooterSubText>
        <Form onSubmit={handleSubmit}>
          <FormInput
            name='name'
            type='text'
            placeholder={t('footer.yourName')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            name='company'
            type='text'
            placeholder={t('footer.companyName')}
            value={formData.company}
            onChange={handleChange}
            required
          />
          <FormInput
            name='email'
            type='email'
            placeholder={t('footer.yourEmail')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormTextarea
            name='inquiry'
            placeholder={t('footer.yourInquiry')}
            value={formData.inquiry}
            onChange={handleChange}
            required
          />
          <Button fontBig type='submit'>{t('footer.sendInquiryBtn')}</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>{t('footer.contactUs')}</FooterLinkTitle>
            {t('footer.email')} <a href="mailto:sales@cfnadigitalsolution.com" style={{ color: 'white' }}>sales@cfnadigitalsolution.com</a>
            <p>{t('footer.phone')}(+45) 31 71 79 83 </p>
            <p>{t('footer.location')} {t('footer.denmarkCopenhagen')}</p>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>CFNA Digital Solutions © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;