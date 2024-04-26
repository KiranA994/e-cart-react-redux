import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <div className="row my-5">
      <div className="col-md-1"></div>
      <div className="col-md-7 mt-5 mb-5" style={{overflowX:'auto'}}>
        <table className='table shadow w-100'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
<tr>
  <td>1</td>
  <td>iPhone-9</td>
  <td>
    <img src="" alt="" style={{width:'150px',height:'150px'}}/>
  </td>
  <td>$ 549</td>
  <td>
  <button className='btn btn-outline-danger rounded'>
  <FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} />
  </button>
  </td>
</tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-3 mt-5" >
        <div className='shadow p-4'>
          <h1 className='text-primary mb-3'>Cart Summary</h1>
          <h4>Total number of Products: <span className='text-warning'>3</span></h4>
          <h4 className=''>Total Price : <span className='text-warning'>$59</span></h4>
          <button className='btn btn-success rounded mt-4 mb-3 w-100'>Checkout</button>
        </div>
      </div>
      <div className="col-md-1"></div>

       {/* <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
  <div className="col-md-4"></div>
  <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
    <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty cart"
    style={{width:'300px',height: '300px'}} />
  <h2 className='text-danger mt-4'>Your Cart is empty</h2>
<Link to={'/'}>
    <button className='btn btn-success p-3 rounded mt-2'>
    <FontAwesomeIcon icon={faArrowLeft} className='me-3'/>
    Back To Home</button>
</Link>
  </div>
  </div> */}
    </div>




    </>
  )
}

export default Cart