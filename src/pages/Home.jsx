import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFetch from '../Hooks/useFetch';

function Home() {

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  return (
    <>
    <div className='d-flex p-5'>
    <div className='row'>
    <div className="col-md-3 mt-3 ms-2">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>
      <div className="col-md-3 mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>
      <div className="col-md-3 mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>      <div className="col-md-3 mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>      <div className="col-md-3 mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>      <div className="col-md-3 mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>      <div className="col-md-3 mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>
      <div className="col-md-3 mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p style={{fontWeight:'bold'}}>Price : 50$</p>
          <div className='d-flex justify-content-between'>
          <Button className='rounded' variant='outline-danger'>
          <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",backgroundColor: 'white'}} />
          </Button>
          <Button className='rounded' variant='outline-success'>
          <FontAwesomeIcon icon={faCartShopping} style={{color: "#00ff33",backgroundColor:'white'}} />
          </Button>
          </div>

        
      </Card.Body>
    </Card>  
      </div>

    </div>
    </div>
  
    </>
    
  )
}

export default Home