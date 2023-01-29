import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { ArticleItemContainer, ArticleImg, ArticleContainer, MyButton, MyLink, ArticleTitle, ArticleDescription } from '../../../Styles/About/Article'
import Articleimage from '../../../images/Rectangle.png'
import { Colors } from '../../../Styles/theme/Theme'
function Article () {
  return (
    <Box sx={{display:'flex',  padding:'72px 72px 0px 82px', gap:'20px',  }}>
       
        <ArticleContainer sx={{ paddingTop:'50px', width:'373px', }}>
          <Typography sx={{color:Colors.black, marginTop:'27px', marginLeft:'15px',}}>News</Typography>

          <ArticleItemContainer>
            <MyButton>
              Publication
            </MyButton>
            <ArticleTitle sx={{color:Colors.black}}>
            Manufacturing Outlook Q4 2022
            </ArticleTitle>
            <ArticleDescription>
            January 03, 2023
            </ArticleDescription>
           
          </ArticleItemContainer>
          <Divider></Divider>
          <ArticleItemContainer>
            <MyButton>
              Publication
            </MyButton>
            <ArticleTitle sx={{color:Colors.black}}>
            Manufacturing Outlook Q4 2022
            </ArticleTitle>
            <ArticleDescription>
            January 03, 2023
            </ArticleDescription>
           
          </ArticleItemContainer>
          <Divider sx={{color: Colors.black , }}></Divider>
          <ArticleItemContainer>
            <MyButton>
              Publication
            </MyButton>
            <ArticleTitle sx={{color:Colors.black}}>
            Manufacturing Outlook Q4 2022
            </ArticleTitle>
            <ArticleDescription>
            January 03, 2023
            </ArticleDescription>
          
          </ArticleItemContainer>
          <Divider></Divider>
          <ArticleItemContainer>
            <MyButton>
              Publication
            </MyButton>
            <ArticleTitle sx={{color:Colors.black}}>
            Manufacturing Outlook Q4 2022
            </ArticleTitle>
            <ArticleDescription>
            January 03, 2023
            </ArticleDescription>
            
          </ArticleItemContainer>
          <Divider ></Divider>
          <MyLink to='./Insight-more'><Typography >VIEW ALL</Typography></MyLink>
        </ArticleContainer>
        <ArticleContainer>
          <ArticleImg src={Articleimage}/>
        </ArticleContainer>
    </Box> 
    )
}

export default Article