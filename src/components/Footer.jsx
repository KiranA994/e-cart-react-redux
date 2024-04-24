import { faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 bg-primary p-5'>
     <div className="row">
      <div className="col-md-1"></div>
     <div className="col-md-2 text-light">
      <div className='d-flex align-items-center'>
        <FontAwesomeIcon icon={faCartShopping} />
        <h5 className='ms-4 mt-2'>E-CART</h5>
      </div>
      <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam illo dignissimos ad, deleniti perferendis alias rerum delectus eveniet asperiores maiores neque, tenetur reprehenderit. Sit quibusdam commodi eveniet corrupti dolorem.
      </p>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2 text-light">
        <h2>Links</h2>
      <Link to={'/'} style={{textDecoration:'none', color:'white'}}>  <p>Home Page</p></Link>
      <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>  <p>WishList</p></Link>
       <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}> <p>Cart</p></Link>
      </div>
      <div className="col-md-2 text-light">
      <h2>Guides</h2>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-3 text-light">
        <h3>Contact Us</h3>
        <div className='d-flex'>
          <input type="text" placeholder="enter your email id" className='form-control w-100'/>
          <button className='btn btn-warning rounded ms-4'>Subscribe</button>
        </div>
        <div className="d-flex justify-content-evenly mt-4">
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
        <FontAwesomeIcon icon={faTwitter} size="2xl" />
        <FontAwesomeIcon icon={faLinkedin}  size="2xl"/>
        <FontAwesomeIcon icon={faFacebook}  size="2xl" />
        </div>
      </div>

     </div>
          </div>
 
  )
}

export default Footer