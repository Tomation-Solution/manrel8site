import React from 'react'
import { BannerButtonContainer, BannerContainer, BannerContent, BannerDescription, BannerImageContainer, BannerImg, BannerTitle, MyButton } from '../../../Styles/About/Banner'

import { Colors } from '../../../Styles/theme/Theme'

function  Banner(){
  return (
    <BannerContainer>
        
        <BannerContent>
            
                
                <BannerTitle>
                MAN was created to promote and protect manufacturers collective interest
                </BannerTitle>
                <BannerDescription>
                MAN is working day and night on behalf of members, leveraging on our established relationships with the government to ensure the voice of manufacturers is heard where and when it matters. With business leaders of great minds steering our agenda, and a vibrant membership giving their views, government actively seek our input when legislative or policy decisions are about to be made. We are driven by the issues that matters to manufacturers; if there is something holding you back, MAN is here to help.
                </BannerDescription>
                <BannerButtonContainer>
                    <MyButton sx={{backgroundColor:Colors.primary, width:'210px', color: Colors.white}}>
                    Become a Member
                    </MyButton>
                    <MyButton sx={{ width:'390px', color: Colors.white, border: '1px solid #fff'}}>
                    Login For already existing members
                    </MyButton>
                </BannerButtonContainer>
        
        </BannerContent>
    </BannerContainer>
  )
}

export default Banner