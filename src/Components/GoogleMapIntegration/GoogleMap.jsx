import React,{useEffect} from 'react'
import './GoogleMap.css'

function GoogleMap({latitude,longitude}) {
useEffect(()=>{
    const iframeData = document.getElementById("iframeId")
    const lat=latitude;
    const lon=longitude;
    iframeData.src=`https://maps.google.com/maps?q=${lat},${lon}&h1=es;&output=embed`

})

  return (
    <div className='google-maps'>
        <iframe id="iframeId" className='map' height="300px" width="180%" frameborder="0">
      
        </iframe>
    </div>
  )
}

export default GoogleMap
