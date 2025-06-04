import React from 'react'

const About = () => {
  return (
    <>
      <section id='aboutUs_mini'>
        <div className="first_container">
            <div className="container">
                <h1>About Us</h1>
                <p>our website is about real estate lands and properties</p>
                <p>visit us</p>
            </div>
             <button>next</button>
        </div>
        <div className='second_container'>
           <div className="image">
            <img src="./assets/image6.jpg" alt="image"/>
           </div>
           <div className="image">
            <img src="./assets/image7.jpg" alt="image"/>
           </div>
        </div>
      </section>
    </>
  )
}

export default About
