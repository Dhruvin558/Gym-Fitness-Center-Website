import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Review.css'
import { styled } from '@mui/material/styles';



const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#8B4513', // Customize the filled star color (similar to the first image)
    },
    '& .MuiRating-iconEmpty': {
      color: '#551A8B', // Customize the empty star color (similar to the first image)
    },
  });
const Data = () => {
  return (
    <div className='data'>
          {data.map((item, index) => (
        <Box key={index} sx={{ mb: 2,  p: 1, borderRadius: 1 }}> 
          {/* Background color similar to the first image */}
          <img src={item.logo} className='logo' />
          <p className='name'>{item.name}</p>
          <StyledRating value={item.rating} readOnly className='star'/>
          <p className='feed'>{item.review}</p>
        </Box>
      ))}
    </div>
  )
}

const data =[
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
    {
        "name": "Name",
        "rating": 4,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "logo": "/image/Vectorss.png"
      },
      
    ]
export default Data