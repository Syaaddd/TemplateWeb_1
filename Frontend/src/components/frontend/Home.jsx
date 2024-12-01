import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Home = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default Home
