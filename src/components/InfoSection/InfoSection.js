import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

 const InfoSection = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    const { t } = useTranslation();

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{t(topLine)}</TopLine>
                            <Heading lightText={lightText}>{t(headline)}</Heading>
                            {Array.isArray(description) ? (
                              description.map((item, index) => (
                                <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                                  <FaCheck style={{ color: '#4B59F7', marginRight: '10px', marginTop: '5px', fontSize: '20px' }} />
                                  <div>
                                    <h4 style={{ color: lightText ? '#f7f8fa' : '#1c2237', fontSize: '20px', lineHeight: '24px', fontWeight: '700', marginBottom: '8px' }}>{t(item.title)}</h4>
                                    <Subtitle lightTextDesc={lightTextDesc} style={{ fontSize: '16px', lineHeight: '24px' }}>{t(item.description)}</Subtitle>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <Subtitle lightTextDesc={lightTextDesc} dangerouslySetInnerHTML={{ __html: t(description) }} />
                            )}
                            {buttonLabel && (
                              <Link to='/sign-up'>
                                <Button big fontBig primary={primary}>
                                  {t(buttonLabel)}
                                </Button>
                              </Link>
                            )}
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;