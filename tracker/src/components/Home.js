import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <header>
        {/* <!-- Intro settings --> */}


        {/* <!-- Navbar --> */}

        {/* <!-- Navbar --> */}

        {/* <!-- Background image --> */}
        <div
          
            id="intro-example"
            className="p-5 text-center bg-image">
          
            <div className="mask">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-black">
                  <h1 className="mb-3">Hello Developer!</h1>
                  <h5 className="mb-4">Now you can,keep the track of your projects</h5>
                  <br></br>
                  <br></br>
                  <h6>Not a member? kindly sign in.</h6>


                  <NavLink
                    className="btn btn-dark btn-lg m-2 text-white"
                    to='/SignUp'
                    role="button"
                    rel="nofollow"
                    

                  >Get Started -></NavLink>

                </div>
              </div>
            </div>
          </div>
        
        {/* <!-- Background image --> */}
      </header>


    </div>
  )
}

export default Home