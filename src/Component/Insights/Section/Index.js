import React from 'react'
import { Container, Grid, Box } from "@mui/material";
import { AddBox } from '@mui/icons-material';
import { Colors } from '../../../Styles/theme/Theme';
import sectionpic from '../../../images/bannerimg.jpg'
import iconimg from '../../../images/Vector(1).svg'
import { MyButton, SectionDescription, SectionImg, SectionItemContainer, SectionTitle } from '../../../Styles/About/Section';
function Section(){
  return (
    
        <Box sx={{margin:0, padding:0, backgroundColor:'#F3F4F7',}}>
            <Grid
                container
                justifyContent={'left'} 
                alignContent={'center'}      
                sx ={{  gap:0,  width:'1200px', height:'900px', marginLeft:15, marginTop:10, }} 
                
                  
                >
                    
                        <SectionItemContainer>
                            <SectionImg src={sectionpic}/>
                            <SectionTitle>
                                Membership
                            </SectionTitle>
                            <SectionDescription>
                            A prospective member of MAN must be a manufacturer and have a manufacturing plant in Nigeria.Please view the Membership Requirement and confirm you are eligible.                                
                            </SectionDescription>
                        </SectionItemContainer>
                        <SectionItemContainer>
                            <SectionImg src={sectionpic}/>
                            <SectionTitle>
                                Membership
                            </SectionTitle>
                            <SectionDescription>
                            A prospective member of MAN must be a manufacturer and have a manufacturing plant in Nigeria.Please view the Membership Requirement and confirm you are eligible.                                
                            </SectionDescription>
                        </SectionItemContainer>
                        <SectionItemContainer>
                            <SectionImg src={sectionpic}/>
                            <SectionTitle>
                                Membership
                            </SectionTitle>
                            <SectionDescription>
                            A prospective member of MAN must be a manufacturer and have a manufacturing plant in Nigeria.Please view the Membership Requirement and confirm you are eligible.                                
                            </SectionDescription>
                        </SectionItemContainer>
                        <SectionItemContainer>
                            <SectionImg src={sectionpic}/>
                            <SectionTitle>
                                Membership
                            </SectionTitle>
                            <SectionDescription>
                            A prospective member of MAN must be a manufacturer and have a manufacturing plant in Nigeria.Please view the Membership Requirement and confirm you are eligible.                                
                            </SectionDescription>
                        </SectionItemContainer>
                        <SectionItemContainer>
                            <SectionImg src={sectionpic}/>
                            <SectionTitle>
                                Membership
                            </SectionTitle>
                            <SectionDescription>
                            A prospective member of MAN must be a manufacturer and have a manufacturing plant in Nigeria.Please view the Membership Requirement and confirm you are eligible.                                
                            </SectionDescription>
                        </SectionItemContainer>
                        
            </Grid>
        </Box>

  )
}

export default Section