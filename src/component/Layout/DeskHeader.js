import React from 'react'
import "./DeskHeader.css"
import Header from './Header'


function DeskHeader() {
  return (
      <div className='header' >
          <div className='left' > 
          <h1>UI/UX projects</h1>
           </div>
          <div className='center'> </div>
          <div className='right'> <Header /> </div>

      </div>
  )
}

export default DeskHeader