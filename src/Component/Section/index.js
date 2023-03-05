import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import { AddBox } from '@mui/icons-material'
import { Colors } from '../../Styles/theme/Theme'
import sectionpic from '../../images/div20.png'
import sectionpic2 from '../../images/div21.png'
import sectionpic3 from '../../images/div22.png'
import Before from '../../images/div_before.png'
import After from '../../images/div_after.png'
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
        <SectionItemContainer
          sx={{
            backgroundColor: Colors.primary,
            padding: '30px',
            [theme.breakpoints.down('sm')]: {
              padding: '30px 10px',
            },
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <img
              src={Before}
              alt=''
              style={{ height: '53px', width: '53px', alignSelf: 'flex-end' }}
            />
            <div style={{ padding: '30px 0' }}>
              <SectionTitle sx={{ color: Colors.white }}>
                Our Mission
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontFamily: 'Arial',
                  fontSize: '14px',
                }}
              >
                1. "MAN promotes the interest of manufacturers by deepening its
                advocacy and partnership with national and international
                economic actors in Government, Organized Private Sector, host
                communities and other stakeholders to foster its proactive role
                in policy formulation and implementation.” <br /> 2. "MAN
                promotes manufacturing sector competitiveness, contribution to
                job creation and Gross Domestic Product through commitment to
                research and development, new technologies and environmental
                sustainability.”
              </SectionDescription>
            </div>
            <img src={After} alt='' style={{ height: '53px', width: '53px' }} />
          </div>
        </SectionItemContainer>
        <SectionItemContainer sx={{ Padding: 0 }}>
          <div>
            <SectionImg src={sectionpic} />
            <SectionTitle>Our Vision</SectionTitle>
            <SectionDescription sx={{ color: '#000' }}>
              “To be the key driver for Industrialization, sustainable Economic
              Growth and Development in Nigeria”
            </SectionDescription>
          </div>
        </SectionItemContainer>
        <SectionItemContainer sx={{ Padding: 0 }}>
          <div>
            <SectionImg src={sectionpic2} />
            <SectionTitle sx={{ color: '#8A8A8A' }}>Our Vision</SectionTitle>
            <SectionDescription sx={{ color: '#8A8A8A' }}>
              The Manufacturers Association of Nigeria (MAN) was established in
              May, 1971 as a company limited by guarantee. The establishment of
              the Association was motivated by the desire to have a focal point
              of communication and consultation between industry on the one
              hand, and the government and general public on the other.
              Hitherto, there was no institutional organ whose central focus was
              to give meaning to the interests, problems and aspirations of the
              manufacturing sector.
              <Link to='/history' style={{ textDecoration: 'none' }}>
                <MyButton
                  sx={{
                    color: '#8A8A8A',
                    borderColor: '#8A8A8A',
                    marginTop: '21px',
                  }}
                >
                  Read More
                </MyButton>
              </Link>
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <img
              src={Before}
              alt=''
              style={{ height: '53px', width: '53px', alignSelf: 'flex-end' }}
            />
            <div style={{ padding: '30px 0' }}>
              <SectionTitle sx={{ color: Colors.white }}>
                Policy & Advocacy
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontFamily: 'Arial',
                  fontSize: '14px',
                }}
              >
                The Manufacturers Association of Nigeria (MAN) was established
                in May, 1971 as a company limited by guarantee. The
                establishment of the Association was motivated by the desire to
                have a focal point of communication and consultation between
                industry on the one hand, and the government and general public
                on the other.
                <Link to='/history' style={{ textDecoration: 'none' }}>
                  <MyButton
                    sx={{
                      color: '#fff',
                      borderColor: '#fff',
                      marginTop: '21px',
                    }}
                  >
                    Continue to page
                  </MyButton>
                </Link>
              </SectionDescription>
            </div>
            <img src={After} alt='' style={{ height: '53px', width: '53px' }} />
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <img
              src={Before}
              alt=''
              style={{ height: '53px', width: '53px', alignSelf: 'flex-end' }}
            />
            <div style={{ padding: '30px 0' }}>
              <SectionTitle sx={{ color: Colors.white }}>
                Why Join MAN?
              </SectionTitle>
              <SectionDescription
                sx={{
                  color: Colors.white,
                  fontFamily: 'Arial',
                  fontSize: '14px',
                }}
              >
                Whether you are planning your next business move, or managing
                the impact of legislative or political change, knowledge is
                power. Our market leading economic surveys, forecast and
                analysis help you plan ahead. Reports; briefings; emails and web
                updates; seminars, training and workshop; consultative forums
                give you valuable intelligence on the latest policy and economic
                developments, business trends and best practice. <br /> <br />
                Members view are well represented in policy formulation
                especially policies that affects manufacturers. MAN work
                restlessly to intervening on members’ regulatory and operational
                issues
              </SectionDescription>
            </div>
            <img src={After} alt='' style={{ height: '53px', width: '53px' }} />
          </div>
        </SectionItemContainer>
        <SectionItemContainer>
          <div>
            <SectionImg src={sectionpic3} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription
              sx={{ color: '#010001', fontSize: '17px', fontWeight: '500' }}
            >
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria. Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
            <Link to='/become-membership' style={{ textDecoration: 'none' }}>
              <SectionMember> Join now {'> '}</SectionMember>
            </Link>
          </div>
        </SectionItemContainer>
      </Grid>
    </Box>
  )
}

export default Section
