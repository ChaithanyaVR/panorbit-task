import React from 'react'
import ComingSoon from '../ComingSoon/ComingSoon'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'


function Posts() {

  const {handleHeaderTitle}= useOutletContext()

  useEffect(() => {
    handleHeaderTitle('Posts')
  },[])
  return (
    <div className='posts-main-container' style={{height: '100%'}}>
       <ComingSoon/>
    </div>
  )
}

export default Posts