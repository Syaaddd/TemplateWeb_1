import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Home = () => {
  return (
    <>
      <header>
        <div className='container py-3'>
          <Navbar expand="lg">
                <Navbar.Brand href="/" className='logo'>
                  <span>UrbanEdge </span>
                Constructions
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                    <Nav.Link href="/about"className='nav-link'>Abaut Us</Nav.Link>
                    <Nav.Link href="/services"className='nav-link'>Services</Nav.Link>
                    <Nav.Link href="/projects" className='nav-link'>Projects</Nav.Link>
                    <Nav.Link href="/blogs" className='nav-link'>Blogs</Nav.Link>
                    <Nav.Link href="/contact" className='nav-link'>Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      <main>
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
              <div className='container-fluid'>
                <div className='text-center'>
                  <span>Welcome Amazing Constructions</span>
                  <h1>Lorem ipsum dolor sit amet. <br />Lorem, ipsum.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint!</p>
                  <a className='btn btn-primary'>Contact Now</a>
                  <a className='btn btn-secondary ms-2'>View Projects</a>
                </div>
              </div>
            </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Home
