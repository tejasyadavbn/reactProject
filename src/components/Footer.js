import React, { Component } from 'react'
import './Footer.css';


export class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='footer-margin'>
                    <div className='footer-row'>
                        <div className='footer-col1'>
                            <p>Quick Links</p><br></br>
                            <ul className='quicklinks'>
                                <li className='list'>Get Started</li>
                                <li className='list'>Explore Our APIs</li>
                                <li className='list'>Resources</li>
                                <li className='list'>My Application</li>
                                <li className='list'>Sign In</li>
                            </ul>
                        </div>
                        <div className='footer-col2'>
                            <p>Corporate</p><br></br>
                            <ul className='quicklinks'>
                                <li className='list'>About Us</li>
                                <li className='list'>Careers</li>
                                <li className='list'>Terms and Conditions</li>
                                <li className='list'>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='footer-col3'>
                            <p><b>TSYS</b></p><br></br>
                            <ul className='quicklinks'>
                                <li className='list'>One TSYS Way</li>
                                <li className='list'>Columbus, GA. 31901-4222</li>
                                <li className='list'>+1.844.663.8797 tel</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer
