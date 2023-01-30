import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import {
  ArticleItemContainer,
  ArticleImg,
  ArticleContainer,
  MyButton,
  MyLink,
  ArticleTitle,
  ArticleDescription,
} from '../../Styles/About/Article'
import Articleimage from '../../images/Rectangle.png'
import { Colors } from '../../Styles/theme/Theme'
import sectionpic from '../../images/bannerimg.jpg'
import {
  SectionDescription,
  SectionImg,
  SectionItemContainer,
  SectionTitle,
} from '../../Styles/About/Section'

function Article() {
  return (
    <Box sx={{ display: 'flex', padding: '72px 72px 0px 82px', gap: '20px' }}>
      <ArticleContainer sx={{ paddingTop: '50px', width: '373px' }}>
        <Typography
          sx={{ color: Colors.black, marginTop: '27px', marginLeft: '15px' }}
        >
          News
        </Typography>

        <ArticleItemContainer>
          <MyButton>Publication</MyButton>
          <ArticleTitle sx={{ color: Colors.black }}>
            Manufacturing Outlook Q4 2022
          </ArticleTitle>
          <ArticleDescription>January 03, 2023</ArticleDescription>
        </ArticleItemContainer>
        <Divider></Divider>
        <ArticleItemContainer>
          <MyButton>Publication</MyButton>
          <ArticleTitle sx={{ color: Colors.black }}>
            Manufacturing Outlook Q4 2022
          </ArticleTitle>
          <ArticleDescription>January 03, 2023</ArticleDescription>
        </ArticleItemContainer>
        <Divider sx={{ color: Colors.black }}></Divider>
        <ArticleItemContainer>
          <MyButton>Publication</MyButton>
          <ArticleTitle sx={{ color: Colors.black }}>
            Manufacturing Outlook Q4 2022
          </ArticleTitle>
          <ArticleDescription>January 03, 2023</ArticleDescription>
        </ArticleItemContainer>
        <Divider></Divider>
        <ArticleItemContainer>
          <MyButton>Publication</MyButton>
          <ArticleTitle sx={{ color: Colors.black }}>
            Manufacturing Outlook Q4 2022
          </ArticleTitle>
          <ArticleDescription>January 03, 2023</ArticleDescription>
        </ArticleItemContainer>
        <Divider></Divider>
        <MyLink>
          <Typography>VIEW ALL</Typography>
        </MyLink>
      </ArticleContainer>
      <ArticleContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <ArticleImg src={Articleimage} />
        <Box>
          <SectionItemContainer>
            <SectionImg src={sectionpic} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription>
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria.Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionImg src={sectionpic} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription>
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria.Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionImg src={sectionpic} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription>
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria.Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionImg src={sectionpic} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription>
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria.Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionImg src={sectionpic} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription>
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria.Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
          </SectionItemContainer>
          <SectionItemContainer>
            <SectionImg src={sectionpic} />
            <SectionTitle>Membership</SectionTitle>
            <SectionDescription>
              A prospective member of MAN must be a manufacturer and have a
              manufacturing plant in Nigeria.Please view the Membership
              Requirement and confirm you are eligible.
            </SectionDescription>
          </SectionItemContainer>
        </Box>
      </ArticleContainer>
    </Box>
  )
}

export default Article
