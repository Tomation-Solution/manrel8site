import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import { AddBox } from '@mui/icons-material'
import { Colors } from '../../Styles/theme/Theme'
import sectionpic from '../../images/div6.png'
import sectionpic2 from '../../images/div7.png'
import iconimg from '../../images/technology-light.svg.png'
import iconimg2 from '../../images/reports-light.png.png'
import theme from '../../Styles/theme/Theme'
import { Link, useNavigate } from 'react-router-dom'
import {
  MyButton,
  SectionDescription,
  SectionImg,
  SectionItemContainer,
  SectionTitle,
  SectionMember,
  
} from '../../Styles/Section'
function Section() {
  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <Grid
        container
        justifyContent={'space-evenly'}
        alignContent={'center'}
        sx={{
          padding: '0 50px',
          [theme.breakpoints.down('lg')]: {
            padding: '0 20px',
          },
        }}
      >
        <SectionItemContainer sx={{ Padding: 0 }}>
          <div>
            <SectionImg src={sectionpic} />
            <SectionTitle>Why join Man?</SectionTitle>
            <SectionDescription sx={{ color: '#717861' }}>
              Whether you are planning your next business move, or managing the
              impact of legislative or political change, knowledge is power. Our
              market leading economic surveys, forecast and analysis help you
              plan ahead. Reports; briefings; emails and web updates; seminars,
              training and workshop; consultative forums give you valuable
              intelligence on the latest policy and economic developments,
              business trends and best practice.
            </SectionDescription>
            <SectionDescription sx={{ color: '#717861' }}>
              Members view are well represented in policy formulation especially
              policies that affects manufacturers. MAN work restlessly to
              intervening on members’ regulatory and operational issues.
            </SectionDescription>
          </div>
        </SectionItemContainer>
        <SectionItemContainer
          sx={{
            backgroundColor: Colors.primary,
            padding: '30px',
            [theme.breakpoints.down('sm')]: {
              padding: '30px 10px',
            },
          }}
        >
          <div>
            <SectionTitle sx={{ color: Colors.white }}>
              POLICY & Advocacy
            </SectionTitle>
            <SectionDescription sx={{ color: Colors.white }}>
              The Manufacturers Association of Nigeria (MAN) was established in
              May, 1971 as a company limited by guarantee. The establishment of
              the Association was motivated by the desire to have a focal point
              of communication and consultation between industry on the one
              hand, and the government and general public on the other.
            </SectionDescription>
          </div>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'center',
              [theme.breakpoints.down('sm')]: {
                justifyContent: 'center',
              },
            }}
          >
            <MyButton sx={{ color: Colors.white }}>Continue To Page</MyButton>
            <SectionImg src={iconimg} sx={{ width: 116, height: 118 }} />
          </Container>
        </SectionItemContainer>
        <SectionItemContainer
          sx={{
            backgroundColor: Colors.primary,
            padding: '30px',
            [theme.breakpoints.down('sm')]: {
              padding: '30px 10px',
            },
          }}
        >
          <div>
            <SectionTitle sx={{ color: Colors.white }}>
              Our History
            </SectionTitle>
            <SectionDescription sx={{ color: Colors.white }}>
              The Manufacturers Association of Nigeria (MAN) was established in
              May, 1971 as a company limited by guarantee. The establishment of
              the Association was motivated by the desire to have a focal point
              of communication and consultation between industry on the one
              hand, and the government and general public on the other.
              Hitherto, there was no institutional organ whose central focus was
              to give meaning to the interests, problems and aspirations of the
              manufacturing sector.
            </SectionDescription>
          </div>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              alignItems: 'center',
              [theme.breakpoints.down('sm')]: {
                justifyContent: 'center',
              },
            }}
          >
            <Link to='/history'><MyButton sx={{ color: Colors.white }}>Read More</MyButton></Link>
            <SectionImg src={iconimg2} sx={{ width: 116, height: 118 }} />
          </Container>
        </SectionItemContainer>
        <SectionItemContainer>
          <div>
            <SectionImg src={sectionpic2} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription
              sx={{ color: '#010001', fontSize: '17px', fontWeight: '500' }}
            >
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria. Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
            <Link to='/become-membership' sx={{textDecoration:'none'}}><SectionMember> BECOME A MEMBER {'> '}</SectionMember></Link>
          </div>
        </SectionItemContainer>
      </Grid>
    </Box>
  )
}

export default Section
