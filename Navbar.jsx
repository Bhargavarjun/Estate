import React,{ useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {
  const [navHeight, setnavHeight] = useState(false);
  const navigate = useNavigate();
  const gotoHome = () =>{
    navigate("/");
  };
  return (
    <>
      <nav className={ navHeight ? "show nav":"nav"}>
        <div className='logo' onClick={()=> gotoHome()}>LAND FOR SALE</div>
        <ul>
          <li>
            <Link to="/About-us">Know us</Link>
          </li>
          <li>
             <Link to="/Property">Assets</Link>
          </li>
          <li>
             <Link to="/contact">Reach out</Link>
          </li>
        </ul>
        <RxHamburgerMenu className='hamberg' onClick={()=> setnavHeight(!navHeight)}/>
      </nav>
    </>
  )
}

export default Navbar

