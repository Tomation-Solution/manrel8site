import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { ArticleItemContainer, ArticleImg, ArticleContainer, MyButton, ArticleTitle, ArticleDescription } from '../../Styles/Article'
import Articleimage from '../../images/Rectangle.png'
import { Colors } from '../../Styles/theme/Theme'
function Article () {
  return (
    <Box sx={{display:'flex', padding:'72px 72px 0px 82px', gap:'20px',   }}>
        <ArticleContainer>
          <ArticleImg src={Articleimage}/>
        </ArticleContainer>
        <ArticleContainer sx={{ paddingTop:'50px', width:'373px',  backgroundcolor:Colors.primary}}>
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
            <Divider></Divider>
          </ArticleItemContainer>
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
            <Divider></Divider>
          </ArticleItemContainer>
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
            <Divider></Divider>
          </ArticleItemContainer>
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
            <Divider></Divider>
          </ArticleItemContainer>
          <Typography>VIEW ALL</Typography>
        </ArticleContainer>
    </Box> 
    )
}

export default Article