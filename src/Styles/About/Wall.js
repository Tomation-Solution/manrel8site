import { styled } from '@mui/material/styles'
import { Colors } from '../theme/Theme'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'

export const WallContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: Colors.primary,
  padding: '0px 106px',

  gap: 282,
  height: '191px',
}))

export const WallItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  marginTop: '41px',
  width: '500px',
  height: '429px',
}))

export const WallTitle = styled(Typography)(({ theme }) => ({
  lineHeight: '71px',
  fontSize: '27px',
  marginBottom: '4px',
  marginTop: '18px',
  marginLeft: '40px',
  width: '242px',
  height: 33,
  color: Colors.white,
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
}))

export const WallDescription = styled(Typography)(({ theme }) => ({
  lineHeight: '15px',
  fontSize: '12px',
  textAlign: 'left',
  marginLeft: '40px',
  marginTop: '16px',
  marginBottom: '32px',
  width: '627px',
  height: 165,
  color: Colors.white,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
}))

export const MyButton = styled(Button)(() => ({
  width: '250px',
  color: Colors.white,
  textDecoration: 'none',
  padding: '8px 16px 8px 16px',
  margin: 0,
  marginTop: 30,
  height: 34,
  borderRadius: 500,
  fontSize: 16,
  border: '1px solid #fff',
  fontSize: '14px',
  padding: '16px 20px',
}))
