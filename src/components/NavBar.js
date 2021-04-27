import {NavLink} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
export default function NavBar() {
    return (
      <div style={{fontFamily:"QuickSand"}}>
              <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><a href="/" className="nav-link scrollto"><i className="bx bx-home" /> <span>Home</span></a></li>
            <li><a href="/about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
            <li><a href="/project" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
          </ul>
        </nav>{/* .nav-menu */}
      </header>{/* End Header */}
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand"></link>
 
     
      </div>
    );
}
