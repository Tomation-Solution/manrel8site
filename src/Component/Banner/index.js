import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BannerButtonContainer,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImageContainer,
  BannerImg,
  BannerTitle,
  MyButton,
} from '../../Styles/Banner'

import { Colors } from '../../Styles/theme/Theme'

function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle sx={{ color: '#fff' }}>
          MAN was created to promote and protect manufacturers collective
          interest
        </BannerTitle>
        <BannerDescription>
          MAN is working day and night on behalf of members, leveraging on our
          established relationships with the government to ensure the voice of
          manufacturers is heard where and when it matters. With business
          leaders of great minds steering our agenda, and a vibrant membership
          giving their views, government actively seek our input when
          legislative or policy decisions are about to be made. We are driven by
          the issues that matters to manufacturers; if there is something
          holding you back, MAN is here to help.
        </BannerDescription>
        <BannerButtonContainer>
          <Link to='/become-membership' style={{ textDecoration: 'none' }}>
            <MyButton
              sx={{
                backgroundColor: Colors.primary,
                color: Colors.white,
              }}
              style={{ border: 'none' }}
            >
              Join Now
            </MyButton>
          </Link>
        </BannerButtonContainer>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
