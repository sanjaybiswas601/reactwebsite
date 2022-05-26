import React from 'react'
import './Style.css'
import { Navbar,Nav,Container,NavDropdown,Form,FormControl,Button,Card,CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBFooter,MDBContainer,MDBIcon,MDBInput,MDBCol,MDBRow,Section,MDBBtn} from 'mdb-react-ui-kit';
const Website = () => {
  return (
    <>
    <section className='header'>
    <Navbar bg="transparent" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">LOGO</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
 </Navbar>
 <div className='text-box'>
    <h1>World's Largest see Beach </h1>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
     <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet </p>
     <Button variant="outline-success">More</Button>
 </div>

    </section>

    <section className='view'>
        <h1>Nature views are</h1>
        <p>netus et malesuada fames ac turpis egestas</p>
        <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Content</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button variant="outline-success">More</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Content</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content. has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button variant="outline-success">More</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Content</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button variant="outline-success">More</Button>
    </Card.Body>
  </Card>
</CardGroup>

    </section>

    <section className='view-section'>
    <div className='view-photo'>
    <h1>Beauty of Nature</h1>
    <p>show that equal height action</p>
    <div className='row'>
        <div className='view-photo-col'>
          <img src='./Photos/sky.jpg'/>
            <div className='layer'>
            <h3>POLAND</h3>

            </div>
        </div>
        <div className='view-photo-col'>
          <img src='./Photos/sky2.jpg'/>
            <div className='layer'>
            <h3>JAPAN</h3>

            </div>
        </div>
        <div className='view-photo-col'>
          <img src='./Photos/sky.jpg'/>
            <div className='layer'>
            <h3>BRASIL</h3>

            </div>
        </div>

    </div>
    </div>
    </section>
    <section>
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    abc 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    abc 2
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    abc 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    abc 2
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    abc 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    abc 2
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    abc 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    abc 2
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white'>
          Sanjay biswas
        </a>
      </div>
    </MDBFooter>

    </section>
    </>
  )
}

export default Website