import React from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import ComingSoon from '../ComingSoon/ComingSoon'


function Gallery() {

  const {handleHeaderTitle}= useOutletContext()

  useEffect(() => {
    handleHeaderTitle('Gallery')
  },[])
  return (
    <div style={{height: '100%'}}>
      <ComingSoon/>
    </div>
  )
}

export default Gallery