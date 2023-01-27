import React from 'react'
import { FooterContainer, FooterDescription, FooterImg, FooterItemsContainer, MyButton } from '../../Styles/Footer'
import logoICon from '../../images/manlogo2.png'
function Footer (){
  return (
    <FooterContainer >
        <FooterItemsContainer sx={{width:334, }}>
            <FooterImg src={logoICon}/>
            <FooterDescription>01-4542700, 01-4542701 
                    info@manufacturersnigeria.org
            </FooterDescription>
            <FooterDescription>77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria </FooterDescription>
            <FooterDescription> vad lvl kido sggt sfg</FooterDescription>
            <MyButton>REQUEST MAN SERVICES</MyButton>
        </FooterItemsContainer>
        <FooterItemsContainer sx={{marginTop:5, marginLeft:30,}}>
            <FooterDescription>Sitemap</FooterDescription>
            <FooterDescription>Privacy Notice</FooterDescription>
            <FooterDescription>Modern Slavery Statement</FooterDescription>
            <FooterDescription>Terms & Conditions</FooterDescription>
            <FooterDescription>Website help</FooterDescription>
            <footerDescription>Webmail Login</footerDescription>
        </FooterItemsContainer>
    </FooterContainer>
  )
}

export default Footer