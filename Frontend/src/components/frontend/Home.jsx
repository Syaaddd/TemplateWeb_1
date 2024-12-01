import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AboutImg from '../../assets/images/about-us.jpg';

const Home = () => {
  return (
    <>
      <header>
        <div className='container py-3'>
          <Navbar expand="lg">
                <Navbar.Brand href="/" className='logo'>
                  <span>Name </span>
                 Website
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
         {/*Hero Section */}
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
              <div className='container-fluid'>
                <div className='text-center'>
                  <span>Welcome Lorem, ipsum dolor.</span>
                  <h1>Lorem ipsum dolor sit amet. <br />Lorem, ipsum.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint!</p>
                  <div className='mt-4'>
                    <a className='btn btn-primary'>Contact Now</a>
                    <a className='btn btn-secondary ms-2'>View Projects</a>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/*About Us Section */}
        <section className='section-2 py-5'>
            <div className='container py-5'>
                <div className='row'>
                  <div className='col-md-6'>
                    <img src={AboutImg} c className='w-100' />
                  </div>

                  <div className='col-md-6'>
                    <span>about us</span>
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Minus sint consequatur optio voluptas, fuga ex quam necessitatibus 
                      beatae nostrum adipisci mollitia asperiores dignissimos repudiandae
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Minus sint consequatur optio voluptas, fuga ex quam necessitatibus 
                      beatae nostrum adipisci mollitia asperiores dignissimos repudiandae
                       vitae laborum quae, excepturi possimus! Nobis aliquam officiis, velit s.
                    </p>
                  </div>
                </div>
            </div>
        </section>
      </main>
      <footer>
          <div className='container'>
              <div className='col-md-3'>

              </div>
              <div className='col-md-3'>

              </div>
              <div className='col-md-3'>

              </div>
              <div className='col-md-3'>

              </div>
          </div>
      </footer>
    </>
  )
}

export default Home
