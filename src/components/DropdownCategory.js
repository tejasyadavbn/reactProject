import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuItemsCategory} from './MenuItemsCategory'
import './Dropdown.css'

function Dropdown(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
    <ul onClink={handleClick}
    className={click? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItemsCategory.map((item, index) =>{
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