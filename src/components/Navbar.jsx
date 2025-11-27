import { navList } from "../constant"
import { appleCart, appleLogo, appleSearch } from "../utils"

function Navbar() {
  return (
  <nav id="navBar">
    <div className="navContainer">
        <div className="navLogo">
          <img src={appleLogo} alt="Apple" width={12} height={2} />
        </div>
        <div className="navContent">
          <ul>
            {
              navList.map((nav, index) => (
                <li key={index}>
                  <a href={nav.href}>{nav.description}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="navIcons">
            <img src={appleSearch} alt="Search" width={12} height={12}/>
            <img src={appleCart} alt="Cart" width={12} height={12}/>
        </div>
    </div>
  </nav>
  )
} 

export default Navbar