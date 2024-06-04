import React from 'react';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookIcon from '@mui/icons-material/Book';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'
function Sidebar() {
  return (
   
    <div className='  block ' >
    <div className='d-flex flex-lg-column flex-md-row flex-md-row pb-4 p-lg-4 pt-4 gap-5 flex-column gap-sm-5'>
        <div className='d-flex justify-content-center justify-content-lg-start'>
        <div className='rounded-circle  bg-black text-white flex justify-content-center align-content-center' style={{ height: '70px', width: '70px' }}>
           
                <p className='m-0 text-center'>Food</p>
                <p className='m-0 text-center'>Secret</p>
            
        </div>
        </div>
        <div className='block1 '>
        <div className=' justify-content-md-end d-flex justify-content-evenly justify-content-md-evenly flex-lg-column gap-lg-4 '>
        <div className='d-flex gap-2 flex-column flex-lg-row box ' >
            <BookmarkAddOutlinedIcon/>
            <a className="nav-link" href="#" style={{ color: '#0000FF' }}>BookMark</a>
        </div>
        <div className='d-flex gap-2 flex-column flex-lg-row box'>
            
            <BookIcon/>
            
            <a className="nav-link" href="#" style={{color:'#0000FF'}}>Blog</a>
        </div>
        <div className='d-flex gap-2 flex-column flex-lg-row box'>
            <PhoneIcon/>
            <a className="nav-link" href="#" style={{color:'#0000FF'}}>Contact</a>
        </div>
        <div className='d-flex gap-2 flex-column flex-lg-row box'>
            <InfoIcon/>
            <a className="nav-link" href="#" style={{color:'#0000FF'}}>About</a>
        </div>
        <div className='d-lg-flex flex-column  d-none '>
           
            <div>
                <p>Latest Post</p>
                <p>for more info</p>
                <p style={{color:'#0000FF'}}>Visit divyagandhi274@gmail.com</p>
                <p>Number one bloging </p>
                <p style={{color:'#0000FF'}}>Website in India</p>
            </div>
            
        </div>
        </div>
        </div>
    </div>
    </div>
 
  );
}

export default Sidebar;
