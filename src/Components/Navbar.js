import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faFolder, faAddressCard, faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = (props) => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const toggleMobile = () => setMobileToggle(!mobileToggle);
  
  const {pages, currentPage, setCurrentPage, contactSelected, setContactSelected} = props;
 

  useEffect(() => {
    document.title = currentPage.title;
  }, [currentPage]);
  return (
    <nav>
        <div className='nav-wrapper'>
            <div className='nav-h1-div'>
                <h1>Imjord</h1>
            </div>
            <div className='nav-links-div'>
                <ul>
                <a onClick={() => setCurrentPage(pages[0])}><li><FontAwesomeIcon icon={faHouseChimney}/></li></a>
                <a onClick={() => setCurrentPage(pages[1])}><li><FontAwesomeIcon icon={faFolder}/></li></a>
                <a onClick={() => setCurrentPage(pages[2])}><li><FontAwesomeIcon icon={faAddressCard}/></li></a>
                </ul>
            </div>
            <div className='mobile-hamburger'>
              <FontAwesomeIcon icon={faBars} onClick={toggleMobile} />
            </div>
            {mobileToggle ? <div className='mobile-links'> 
            <ul>
                <a onClick={() => setCurrentPage(pages[0])}><li>Home</li></a>
                <a onClick={() => setCurrentPage(pages[1])}><li>Projects</li></a>
                <a onClick={() => setCurrentPage(pages[2])}><li>Contact</li></a>
                </ul>
            
             </div> : null}
        </div>
    </nav>
  )
}

export default Navbar