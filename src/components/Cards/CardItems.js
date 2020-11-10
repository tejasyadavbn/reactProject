import React from 'react';
import './Cards.css'

function CardItems(props) {
    return (
          <li className='cards__item'>
            <div className='cardblock'>
            <div className='row'>
                <div className='column'>
                <h3>{props.heading}</h3><br></br>
                </div>
            </div>
            <div className='row2'>
                <div className='column'>
                <p className='prodDesc'>{props.text}</p>
                </div>
            </div>
            <div className='row3'>
                <div className='linksgrid'>
                    <div className='link1'>
                        <h4>{props.overview}</h4>
                    </div>
                    <div className='link2'>
                        <h4>API Docs</h4>
                    </div>
                </div>
            </div>
            </div>
          </li>
      );
}

export default CardItems
