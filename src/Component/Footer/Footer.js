import React from 'react'
import {
  FooterContainer,
  FooterDescription,
  FooterImg,
  FooterItemsContainer,
  MyButton,
} from '../../Styles/Footer'
import logoICon from '../../images/manlogo2.png'
import theme from '../../Styles/theme/Theme'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <FooterContainer>
      <FooterItemsContainer
        sx={{ width: '40%', [theme.breakpoints.down('md')]: { width: '100%' } }}
      >
        <FooterImg src={logoICon} />
        <FooterDescription>
          01-4542700, 01-4542701 
        </FooterDescription>
        <FooterDescription>
        info@manufacturersnigeria.org
        </FooterDescription>
        <FooterDescription> 77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria{' '}</FooterDescription>
        <Link to='/Services'><MyButton>REQUEST MAN SERVICES</MyButton></Link>
      </FooterItemsContainer>
      <FooterItemsContainer>
        <FooterDescription>Sitemap</FooterDescription>
        <FooterDescription>Privacy Notice</FooterDescription>
        <FooterDescription>Modern Slavery Statement</FooterDescription>
      </FooterItemsContainer>
      <FooterItemsContainer>
        <FooterDescription>Terms & Conditions</FooterDescription>
        <FooterDescription>Website help</FooterDescription>
        <footerDescription>Webmail Login</footerDescription>
      </FooterItemsContainer>
    </FooterContainer>
  )
}

export default Footer
