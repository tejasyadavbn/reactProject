import React from 'react'
import './Cards.css'
import CardItems from './CardItems';

function Cards2() {
    return (
    <div className='cards'>
      <div className='headertext'>
        <h1>Our Category 2 Products</h1><br></br>
        <p>We've offered you the tools you'll need to build better solutions for your customers.</p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              heading='Commercial Digital Experiences'
              text='Our commercial experiences include a suite of self-service modules providing cardholders and administrators of companies with the insight, data, and controls needed to facilitate and manage organizational spending for purchasing, commercial, travel and virtual programs. Now these modules and services are available through our digital APIs'
              label='cde'
              path='/cde'
            />
            <CardItems
              heading='Commercial Issuing Essentials'
              text={"Take control of your business with our Commercial Issuing APIs. You'll get a bird's eye view of every individual account with a corporate card to keep up with your employees' overall credit limit, payments that have been made to the account(s), where the corporate card(s) are being spent, and more."}
              label='cie'
              path='/cie'
              overview='Overview'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              heading='Commercial Virtual Solutions'
              text='Virtual Payment APIs are used to create a virtual account, maintain virtual account attributes, or request information about virtual account information.'
              label='cvs'
              path='/cvs'
              overview='Overview'
            />
            <CardItems
              heading='Communications Platform'
              text='The Communications Platform provides a comprehensive, consolidated, consistent and configurable hub to handle consumer communications triggered by events and data originating within a number of TSYS platforms and products. API tools are available for notifications in a number of categories.'
              label='cp'
              path='/cp'
              overview='Overview'
            />
          </ul>
        </div>
      </div>
    </div>
    );
}

export default Cards2
