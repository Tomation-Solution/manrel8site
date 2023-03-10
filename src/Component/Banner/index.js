import React, { useState, useEffect } from 'react'
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
import Image from '../../images/Rectangle.png'
import Image1 from '../../images/bg(1).png'
import Image2 from '../../images/bg(2).png'
import Image3 from '../../images/bg(3).png'
import { Colors } from '../../Styles/theme/Theme'
import './Banner.scss'
function Banner() {
  const [activeClass, setActiveClass] = useState('active1')
  useEffect(() => {
    // Define an array with your classes
    const classes = ['active1', 'active2', 'active3', 'active4']

    // Use setInterval to change the activeClass every 2 seconds
    const interval = setInterval(() => {
      // Find the index of the current activeClass in the classes array
      const currentIndex = classes.indexOf(activeClass)

      // Calculate the index of the next class, wrapping around to the start of the array if necessary
      const nextIndex = (currentIndex + 1) % classes.length

      // Update the activeClass state with the next class
      setActiveClass(classes[nextIndex])
    }, 5000)
    return () => clearInterval(interval)
  }, [activeClass])

  return (
    <div className={activeClass}>
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
    </div>
  )
}

export default Banner
