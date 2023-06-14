import React from 'react'
import bgimg from '../Images/top-view-books-with-copy-space.jpg'
import { TypeAnimation } from 'react-type-animation';
import freeShip from '../Images/12354.jpg'


function Home() {
  return (
    <div>
      <div style={{position:"relative"}}>
        <img src={bgimg} alt="" style={{width:"100%" , height:"550px"}} />
        <div style={{position:"relative", marginTop:"-25%" , left:"70px"}}>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Upto 75% Off',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Upto 50% Off',
        1000,
        'Upto 25% Off',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', fontWeight:"bold"    , display: 'inline-block' }}
      repeat={Infinity}/>
      <p>
        Lorem ipsum dolor sit amet consectetur corporis delectus laudantium! Voluptates ratione consectetur <br /> vero maxime minima accusamus ab, possimus nam aperiam.
      </p>
      <button type="button" class="btn btn-success">Shop Now</button>




        </div>
        <br />  <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />


      </div>
      <div className="d-flex" style={{justifyContent:"center"}}>
  <div className="row" style={{gap:"50px"}}  >
    <div className="col">
    <i> <img src="" alt="" /> </i>
    
    </div>

    <div className="col">
    <i><img src={freeShip} style={{width:"200px"}} alt="" /></i>
  
    </div>

    <div className="col">
    <i><img src={freeShip} style={{width:"200px"}} alt="" /></i>
    </div>

    <div className="col">
    <i><img src={freeShip} style={{width:"200px"}} alt="" /></i>
    </div>

    <div className="col">
    <i><img src={freeShip} style={{width:"200px"}} alt="" /></i>
    </div>



  </div>


</div>

    </div>
    







  )
}

export default Home
