import React from 'react'

import Sidebar from './components/Sidebar'
import Image from './components/Image'
import Cards from './components/Cards'
import Others from './components/Others'

function page() {
  return (
    <div>
      <div className='d-flex flex-lg-row flex-column'>
      <Sidebar/>
      <div className='d-flex flex-column w-100'>
          <Image/>
          <Others/>
          <div className='m-3'>
          <Cards/>
          </div>
          
      </div>
     
      
      
     
      
      
      </div>
      
    </div>
  )
}

export default page
