import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';
import { useTranslation } from 'react-i18next';

function Navbar() {

    const { t, i18n } = useTranslation();

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [aboutClick, setAboutClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setAboutClick(false);
    }
    const handleAboutClick = () => {
        setHomeClick(false);
        setAboutClick(true);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        {t('navbar.logo')}
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                {t('navbar.home')}
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleAboutClick} aboutClick={aboutClick}>
                            <NavLinks to='/about' onClick={closeMobileMenu}>
                                {t('navbar.aboutUs')}
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>{t('navbar.signUp')}</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button onClick={closeMobileMenu} fontBig primary>{t('navbar.signUp')}</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                        <NavItemBtn>
                            <Button onClick={() => changeLanguage(i18n.language === 'en' ? 'da' : 'en')}>
                                {i18n.language === 'en' ? 'DA' : 'EN'}
                            </Button>
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar;
