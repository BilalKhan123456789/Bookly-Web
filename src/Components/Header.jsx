import React from 'react'
import { FaBookReader } from 'react-icons/fa';
import { FaSearch} from 'react-icons/fa';
import { AiTwotoneHeart} from 'react-icons/ai';
import { FaStore} from 'react-icons/fa';
import { RiAccountCircleFill} from 'react-icons/ri';





function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <a className="navbar-brand" ><FaBookReader/>  Bookly</a>

      <form className="d-flex" role="search" style={{margin:"auto"}} >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  type="submit"><FaSearch/></button>
      </form>

<div  className="d-flex"  style={{gap:"20px",}}>
    <h5 style={{height:"25px"}}><AiTwotoneHeart/></h5>
    <h5 style={{height:"25px"}}><FaStore/></h5>
    <h5 style={{height:"25px"}}><RiAccountCircleFill/></h5>
</div>

  </div>
</nav>

<div  style={{backgroundColor:"green" ,width:"100%"}}>
    <ul style={{listStyle:"none" ,color:"white", marginLeft:"30%"  , gap:'40px',marginTop:"15px" ,display:"inline-flex"}}>
        <li style={{textAlign:"center"}} >Home</li>
        <li>Features</li>
        <li>Arrival</li>
        <li>Review</li>
        <li>Blogs</li>
    </ul>

</div>



    </div>
  )
}

export default Header
