import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      {/* footer */}
    <div className='setdata' >
      <div style={{paddingBottom:"50px"}} >
        <h2 >Download the app <br></br> to get started</h2>
      </div>
      <div className='flex'>
          <div className='minflex1'>
              <div className='setpic1'><img  width={"35px"} height={"35px"}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5Q9ha8VU-IOOKva2Dw62xT1ugNuIt9qnIw&usqp=CAU'></img></div>
              <div><p className='adj'> <span style={{color: "rgba(33,40,189,.75)",fontSize:"17px"}} >Soon on</span><br></br><span style={{color: "#2128bd",fontWeight:"600",fontSize:"17px"}}>App Store</span></p></div>
          </div>
          <div className='minflex'>
            <div className='setpic'> <img width={"50px"} height={"50px"} src='data:image/png;base64,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'></img> </div>
            <div><p className='adj'> <span style={{color: "rgba(33,40,189,.75)",fontSize:"17px"}} >Soon on</span><br></br><span style={{color: "#2128bd", fontWeight:"600",fontSize:"17px"}}>Google Play</span></p></div>
          </div>
      </div>
    </div>
      <div className='belowpor'>
        <div >
            <img width={"100px"} src='https://wickret.cuberto.com/assets/img/cuberto@2x.png'></img>
        </div>
        <div>
            <span style={{fontSize:"14px",color: "rgba(33,40,189,.75)"}}  >Design & Development</span>
        </div>
      </div>

    
    </div>
  )
}

export default Footer

