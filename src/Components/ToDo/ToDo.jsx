import React from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import ComingSoon from '../ComingSoon/ComingSoon'


function ToDo() {

  const {handleHeaderTitle}= useOutletContext()

  useEffect(() => {
    handleHeaderTitle('ToDo')
  },[])
  return (
    <div style={{height: '100%'}}>
      <ComingSoon/>
    </div>
  )
}

export default ToDo