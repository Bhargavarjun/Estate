import React from 'react';
import { Link, useLocation} from  'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <footer 
         className={isHomePage ? "homePage_footer otherPage_footer": "otherPage_footer"}
      >
        <div className="container">
          <h4>prime location</h4>
          <p>🏙️ **Prime Land Near the Financial District!** 🏡✨  
          Invest in a **high-value property** with **easy access to business hubs**, top amenities, and rapid growth potential. Secure your future today! 🚀</p>
          <ul>
            <li>
              <Link to ="/HOME">HOME</Link>
            </li>
            <li>
              <Link to ="/termsandconditions">Terms and conditions</Link>
            </li>
            <li>
              <Link to ="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>123456789</p>
          <p>Realworld_Estate@gmail.com</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer
