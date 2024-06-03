import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { EmailOutlined } from '@mui/icons-material';
function Others() {
  return (
    <div className='w-100 d-flex flex-lg-row flex-md-row flex-column justify-content-evenly'>
        <div className='w-100 d-flex justify-content-evenly'>
            <EmailOutlinedIcon/>
            <p>Trust in our Food blogs .We provide information about best foods from all over world</p>

        </div>
        <div className=' w-100 d-flex justify-content-evenly'>
            <input type='text' placeholder='Search'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Others