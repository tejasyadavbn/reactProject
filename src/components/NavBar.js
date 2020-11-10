import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import Dropdown from './Dropdown'
import DropdownCategory from './DropdownCategory'


function NavBar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
        setDropdown(true)
    }

    const onMouseLeave = () =>{
        setDropdown(false)
    }

    const [dropdownCat, setDropdownCat] = useState(false);

    const onMouseEnterCat = () =>{
        setDropdownCat(true)
    }

    const onMouseLeaveCat = () =>{
        setDropdownCat(false)
    }

    return(
        <>
            <nav className="navbar">
                <Link to='/home' className="navbar-logo">
                TSYS <b>Developers</b>
                </Link>
                <div className='menu-icon'>

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className ='nav-item1'
                     onMouseLeave={onMouseLeave}>
                        <div className='nav-links' role='button' onClick = {onMouseEnter}>
                             Explore Our APIs 1
                        </div>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className ='nav-item1'
                    onMouseLeave={onMouseLeaveCat}>
                        <div className='nav-links' role='button' onClick = {onMouseEnterCat}>
                             Explore Our APIs 2
                        </div>
                        {dropdownCat && <DropdownCategory/>}
                    </li>
                    <li className ='nav-item'>
                        <Link to='/account' className='nav-links'  onClick = {closeMobileMenu}>
                            Create Account
                        </Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to='/resources' className='nav-links'  onClick = {closeMobileMenu}>
                            Resources
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;