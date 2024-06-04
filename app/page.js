import React from 'react'
import Line from './components/Line'
import Sidebar from './components/Sidebar'
import Cards from './components/Cards'
import Others from './components/Others'
import ImageHeader from './components/ImageHeader'


function page() {
  return (
    <div >
      <div className='d-flex flex-lg-row flex-column'>
      <Sidebar/>
      <div className='d-flex flex-column w-100 ps-lg-4 '>
          <ImageHeader />
          <Others/>
          <div className='m-3'>
          <Cards/>
          </div>
          
      </div>
      </div>
      <Line/>
    </div>
  )
}

export default page
