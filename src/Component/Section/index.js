import React from 'react'
import { Container, Grid, Box } from "@mui/material";
import { AddBox } from '@mui/icons-material';
import { Colors } from '../../Styles/theme/Theme';
import sectionpic from '../../images/bannerimg.jpg'
import iconimg from '../../images/Vector(1).svg'
import { MyButton, SectionDescription, SectionImg, SectionItemContainer, SectionTitle } from '../../Styles/Section';
function Section(){
  return (
    
        <Box sx={{margin:0, padding:0, }}>
            <Grid
                container
                justifyContent={'center'} 
                alignContent={'center'}      
                sx ={{  gap:3,  width:'1300px', height:'900px', marginLeft:3, }} 
                
                  
                >
                    
                        <SectionItemContainer sx={{ Padding:0,}}>

                            <SectionImg src={sectionpic}/>
                            <SectionTitle>
                                Why join Man?
                            </SectionTitle>
                            <SectionDescription sx={{width:468,}}>
                            Whether you are planning your next business move, or managing the impact of legislative or political change, knowledge is power. Our market leading economic surveys, forecast and analysis help you plan ahead. Reports; briefings; emails and web updates; seminars, training and workshop; consultative forums give you valuable intelligence on the latest policy and economic developments, business trends and best practice.

                                Members view are well represented in policy formulation especially policies that affects manufacturers.
                                MAN work restlessly to intervening on members’ regulatory and operational issues.
                                
                            </SectionDescription>
                        </SectionItemContainer>
                        <SectionItemContainer sx={{backgroundColor: Colors.primary, }}>
                            
                            <SectionTitle sx={{color: Colors.white, marginLeft:4,}} >
                            POLICY & Advocacy
                            </SectionTitle>
                            <SectionDescription sx={{color: Colors.white, marginLeft:4,}}>
                            The Manufacturers Association of Nigeria (MAN) was established in May, 1971 as a company limited by guarantee. The establishment of the Association was motivated by the desire to have a focal point of communication and consultation between industry on the one hand, and the government and general public on the other.
                            
                            </SectionDescription>
                            <Container sx={{display:'flex' , gap:12}}>
                            <MyButton sx={{width:234, color: Colors.white}}>
                                Continue To Page
                            </MyButton>
                            <SectionImg src={iconimg} sx={{width:116, height:118,}}/>
                            </Container>
                            
                        </SectionItemContainer>
                        <SectionItemContainer sx={{backgroundColor: Colors.primary}}>
                            
                            <SectionTitle sx={{color: Colors.white, marginLeft:4,}}>
                            POLICY & Advocacy
                            </SectionTitle>
                            <SectionDescription
                             sx={{color: Colors.white, marginLeft:4,}}>
                            The Manufacturers Association of Nigeria (MAN) was established in May, 1971 as a company limited by guarantee. The establishment of the Association was motivated by the desire to have a focal point of communication and consultation between industry on the one hand, and the government and general public on the other.
                            </SectionDescription>
                            <Container sx={{display:'flex' , gap:12,  }}>
                            <MyButton sx={{width:234, color: Colors.white}}>
                                Continue To Page
                            </MyButton>
                            <SectionImg src={iconimg} sx={{width:116, height:118,}}/>
                            </Container>
                            
                        </SectionItemContainer>
                        <SectionItemContainer>
                            <SectionImg src={sectionpic} />
                            <SectionTitle>
                                Why join Man?
                            </SectionTitle>
                            <SectionDescription sx={{width:468,}}>
                            Whether you are planning your next business move, or managing the impact of legislative or political change, knowledge is power. Our market leading economic surveys, forecast and analysis help you plan ahead. Reports; briefings; emails and web updates; seminars, training and workshop; consultative forums give you valuable intelligence on the latest policy and economic developments, business trends and best practice.

                                Members view are well represented in policy formulation especially policies that affects manufacturers.
                                MAN work restlessly to intervening on members’ regulatory and operational issues.
                            </SectionDescription>
                        </SectionItemContainer>
            </Grid>
        </Box>

  )
}

export default Section