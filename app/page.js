import React from 'react'

import Sidebar from './components/Sidebar'
import Image from './components/Image'
function page() {
  return (
    <div>
      <div className='d-flex flex-lg-row flex-column'>
      <Sidebar/>
      <Image/>
      </div>
    </div>
  )
}

export default page
