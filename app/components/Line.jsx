import React from 'react'
import './Line.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
function Line() {
  return (
    <div>
        <div className=' d-flex border-design justify-content-between '>
           
           <p>You can reach us at various social media websites</p>
            <div className='d-flex gap-2'>
                <FacebookIcon/>
                <GoogleIcon/>
                <TwitterIcon/>
            </div>
           
        </div>
    </div>
  )
}

export default Line