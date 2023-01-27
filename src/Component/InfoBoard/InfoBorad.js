import { Container } from '@mui/system'
import React from 'react'
import { Box } from '@mui/material'
import { Colors } from '../../Styles/theme/Theme'
import itemIcon from '../../images/training.svg'
import { InfoContainer, InfoHeader, InfoItemContainer, InfoItemDescription, InfoItemImg, InfoItemTitle, InfoTitle } from '../../Styles/InfoBoard'

function InfoBoard(){
  return (
    <Box sx={{backgroundColor: Colors.primary, marginTop: '184px', width:'100%', marginLeft:0, marginRight:0,padding:0,}}>
        <InfoTitle>
            Why our member love us
        </InfoTitle>
        <InfoHeader>
            Members Benefits
        </InfoHeader>
        <InfoContainer>
        <InfoItemContainer>
            <InfoItemImg src ={itemIcon}/>
            <InfoItemTitle>
            Training & Events
            </InfoItemTitle>
            <InfoItemDescription>
            Conferences, schools, trainings, certifications and more for manufacturers at all levels in every role.
            </InfoItemDescription>
        </InfoItemContainer>
        <InfoItemContainer>
            <InfoItemImg src ={itemIcon}/>
            <InfoItemTitle>
            Training & Events
            </InfoItemTitle>
            <InfoItemDescription>
            Conferences, schools, trainings, certifications and more for manufacturers at all levels in every role.
            </InfoItemDescription>
        </InfoItemContainer>
        <InfoItemContainer>
            <InfoItemImg src ={itemIcon}/>
            <InfoItemTitle>
            Training & Events
            </InfoItemTitle>
            <InfoItemDescription>
            Conferences, schools, trainings, certifications and more for manufacturers at all levels in every role.
            </InfoItemDescription>
        </InfoItemContainer>
        </InfoContainer>
        </Box> 
  )
    
}

export default InfoBoard