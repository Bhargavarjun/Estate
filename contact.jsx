import React from 'react'
import { RiFacebookBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const contact = () => {
  return (
    <section id='contact_mini'>
      <div className="super_container">
         <div className="container">
            <h3>Let's Connect</h3>
            <div>
                <p>phone</p>
                <span>87587524524</span>
            </div>
            <div>
                <p>Email</p>
                <span>abcd@gmail.com</span>
            </div>
            <div>
                <p>Email</p>
                <span>123/A kakacolney,</span>
            </div>
            <ul>
                <Link to={"/"}target='_blank'><RiFacebookBoxLine/></Link>
                <Link to={"/"}target='_blank'><RiFacebookBoxLine/></Link>
                <Link to={"/"}target='_blank'><RiFacebookBoxLine/></Link>
            </ul>
         </div>
         <div className="container">
             <h1>we are here</h1>
             <form>
                <div>
                  <input type="text" placeholder="your name"/>
                  <input type="email" placeholder="Email"/>
                </div>
               <textarea rows="4" placeholder='Your message..'></textarea>
               <button type="submit">Send</button>
             </form>
         </div>
      </div>
    </section>
  )
}

export default contact
