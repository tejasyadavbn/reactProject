import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuItems} from './MenuItems'
import {MenuItems2} from './MenuItems2'
import './Dropdown.css'

function Dropdown(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
    <ul onClink={handleClick}
    className={click? 'dropdown-menu clicked' : 'dropdown-menu'}>
         <Link to='/exploreApis1' className='dropdown-link'>
        <p id="p2">Category-1</p>
        </Link>
        {MenuItems.map((item, index) =>{
            return(
                <li key={index}>
                    <a href={item.path} className={item.cName} onClick={() => setClick(false)}>{item.title}</a>
                    {/* <Link to={item.path} className={item.cName}
                            onClick={() => setClick(false)}>
                                {item.title}
                    </Link> */}
                </li>
            );
        })}

        <Link to='/exploreApis2' className='dropdown-link'>
        <p id="p2">Category-2</p>
        </Link>
        {MenuItems2.map((item, index) =>{
            return(
                <li key={index}>
                    <Link to={item.path} className={item.cName}
                            onClick={() => setClick(false)}>
                                {item.title}
                    </Link>
                </li>
            );
        })}
    </ul>
    
    );
}

export default Dropdown;