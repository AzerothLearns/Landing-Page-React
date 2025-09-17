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

function Footer() {
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
        <FooterSubHeading>Contact Us</FooterSubHeading>
        <FooterSubText>Send us your inquiry and we'll get back to you soon.</FooterSubText>
        <Form onSubmit={handleSubmit}>
          <FormInput
            name='name'
            type='text'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            name='company'
            type='text'
            placeholder='Company Name'
            value={formData.company}
            onChange={handleChange}
            required
          />
          <FormInput
            name='email'
            type='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormTextarea
            name='inquiry'
            placeholder='Your Inquiry'
            value={formData.inquiry}
            onChange={handleChange}
            required
          />
          <Button fontBig type='submit'>Send Inquiry</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            Email: <a href="mailto:sales@cfnadigitalsolution.com" style={{ color: 'white' }}>sales@cfnadigitalsolution.com</a>
            <p>Phone:(+45) 31 71 79 83 </p>
            <p>Location: Denmark, Copenhagen</p>
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