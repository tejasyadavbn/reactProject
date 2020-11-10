import React from 'react';
import './ExploreApis.css'
import Cards from '../Cards/Cards';
import Cards2 from '../Cards/Cards2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useState} from 'react'


function ExploreApis(){

    const [bgColor1, setBgColor1] = useState('#f7f9fb');
    const [bgColor2, setBgColor2] = useState('#198ee2');

    const [color1, setColor1] = useState('black');
    const [color2, setColor2] = useState('white');

    var tabStyle1 = {
        "color":color1, 
        "width": "50%", 
        "text-align":"center",
        "background": bgColor1,
    };

    var tabStyle2 = {
        "color":color2, 
        "width": "50%", 
        "text-align":"center",
        "background": bgColor2
    };

    const onTabSelect = (i) =>{
        if(i===0){
            setBgColor1('#f7f9fb')
            setColor1('black')
            setBgColor2('#198ee2')
            setColor2('white')
        }else if(i===1){
            setBgColor2('#f7f9fb')
            setColor2('black')
            setBgColor1('#198ee2')
            setColor1('white')
        }else{
            setBgColor1('#198ee2')
            setColor1('white')
            setBgColor2('#198ee2')
            setColor2('white')
        }
        
    }

    return(
        <>
            <div className="exploreapis_intro">
               <h3>The TSYS Open API</h3><br></br>
               <p>Unlock the next generation of payments with TSYS Developers</p><br></br>
               <p>Take your fintech project to the next level with easy to use APIs that span across merchant services and prepaid solutions.</p>
            </div>
            <div className="exploreapis_features">
            <h3>Key Features</h3>
            <div className="grid-container">
                <div className= "grid-item">
                    <img
                        className='feature_img'
                        alt='design'
                        src='design.svg'
                    />
                    <p className="para">Augment and design projects from scratch</p>
                </div>
                <div className= "grid-item">
                     <img
                        className='feature_img'
                        alt='sandbox'
                        src='sandbox.svg'
                    />
                    <p className="para">Integrated interactive sandboxes</p>
                </div>
                <div className= "grid-item">
                    <img
                        className='feature_img'
                        alt='apischemas'
                        src='apischemas.svg'
                    />
                    <p className="para">Easy to understand API schemas</p>
                </div>
            </div>

            </div>
            <Tabs  defaultIndex={0} onSelect={onTabSelect} >
              <TabList className='tablist'>
                  <Tab  style={tabStyle1} >
                      Category 1
                  </Tab>
                  <Tab  style={tabStyle2} >
                      Category 2
                  </Tab>
             </TabList>
 
            <TabPanel className='tabpanel'>
                <Cards/>
            </TabPanel>
            <TabPanel className='tabpanel'>
                <Cards2/>
             </TabPanel>
            </Tabs>
            <div className='prefooter_container'>
                <div className= 'prefooter'>
                    <div className='prefooter_row'>
                        <div className='prefooter_col1'>
                            <h2><span>What's </span><span className='italicspan'>Next?</span></h2>
                            <p><b>Find out how you can use our APIs for your project.</b></p>
                        </div>
                        <div className='prefooter_col2'>
                            <button type='button' className='button'><b>Create Account</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExploreApis;