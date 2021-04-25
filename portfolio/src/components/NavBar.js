import react from 'react'
import {NavLink} from 'react-router-dom'
import SocialIcons, { SocialIcon } from 'react-social-icons'
export default function NavBar() {
    return (
      <header className="bg-red-300">
          <div className="items-center">
              <nav className=" flex">
                  <NavLink to="/" exact 
                  activeClassName="text-black"
                  className="inflex-flex items-center py-6 px-10 mr-4 text-red-100 hover:text-red-200 text-4xl font-bold cursive tracking-widest">
                      Shir Koren
                  </NavLink>
                  <NavLink to="/about"
                    activeClassName="font-bold"
                  className="inflex-flex items-center py-8 px-10 mr-4 text-red-100 hover:text-red-200 navSmall tracking-widest">
                  About me
                  </NavLink>                  
                  <NavLink to="project"
                    activeClassName="font-bold"
                  className="inflex-flex items-center py-8 px-10 mr-4 text-red-100 hover:text-red-200 navSmall tracking-widest">
                  Projects
                  </NavLink>
                  <div style={{position:'absolute',right:10,marginTop:"20px"}}>
                  <SocialIcon 
                  url="https://www.linkedin.com/in/shir-koren-232a67197" className="mr-4"
                  target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                  <SocialIcon url="https://github.com/korenshir" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                  </div>
              </nav>

          </div>
      </header>
    );
}