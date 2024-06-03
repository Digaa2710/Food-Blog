import React from 'react';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookIcon from '@mui/icons-material/Book';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
function Sidebar() {
  return (
    <div className='w-100'>
    <div className='d-flex flex-lg-column flex-sm-row flex-md-row p-4 gap-lg-4 justify-content-evenly '>
        <div className='rounded-circle  bg-black text-white flex justify-content-center align-content-center' style={{ height: '70px', width: '70px' }}>
           
                <p className='m-0 text-lg-center'>Food</p>
                <p className='m-0 text-lg-center'>Secret</p>
            
        </div>
        <div className='d-flex gap-2' >
            <BookmarkAddOutlinedIcon/>
            <a class="nav-link" href="#" style={{ color: '#ADD8E6' }}>BookMark</a>
        </div>
        <div className='d-flex gap-2'>
            <BookIcon/>
            <a class="nav-link" href="#" style={{color:'#ADD8E6'}}>Blog</a>
        </div>
        <div className='d-flex gap-2'>
            <PhoneIcon/>
            <a class="nav-link" href="#" style={{color:'#ADD8E6'}}>Contact Us</a>
        </div>
        <div className='d-flex gap-2'>
            <InfoIcon/>
            <a class="nav-link" href="#" style={{color:'#ADD8E6'}}>About Us</a>
        </div>
        <div>
            LATEST POSTS
        </div>
    </div>
    </div>
  );
}

export default Sidebar;
