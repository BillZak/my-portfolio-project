import React from 'react';
//import navbar component
import NavBar from '../../Components/NavBar';
// import dependencies
import { Link } from "react-router-dom";
// import css file
import './Home.css'
//import iamges
import coding from '../../images/coding.svg'
import destination from '../../images/destination.svg'
import webdev from '../../images/webdev.svg'
import responsive from '../../images/responsive.svg'
import vidcall from '../../images/vidcall.svg'


const Home = () => {
    return (
        <>
            <div className="cover">  
            
                <NavBar/>
                
                <div className="container firstview">
                    <div className="row">
                        
                        <div className="col-md-6" style={{textAlign:'left'}}>
                            <h1 style={{fontSize: '80px', fontWeight: 'bold'}}>Hi I'm Bilal</h1>
                            <p style={{fontSize: '30px',marginBottom:'40px', color: 'rgb(3, 107, 100)'}}>
                                FrontEnd Web Developer currently studying at a bootcamp called Codetrain </p>
                            <Link to="/about">
                                  <button type="button" className="btn btn-primary btn-lg">About Me</button>
                            </Link>
                            <Link to="/contacts">
                                  <button type="button" className="btn btn-default btn-lg">Contact Me</button>
                            </Link>
                        </div>
                    
                        <div className="col-md-6">
                            <img src={coding} alt="educator"
                            className="img-responsive" 
                            style={{height: '350px', marginLeft: '40px'}}/>
                        </div>
                    </div>
                </div>
                

        
                <div className="container secondview">
                    <div className="row">

                        <h1 className="text-center" 
                        style={{fontSize: '40px', fontWeight: 'bold', marginBottom: '50px'}}>
                            My Services Provides</h1>

                        <div className="col-md-4">
                            <div className="thumbnail">
                                <img src={vidcall} alt="Easy communication" className="thumbimg"/>
                                <div className="caption">
                                    <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Effective Communication</h3>
                                    <p style={{fontSize: '16px', textAlign: 'center', color: 'rgb(3, 107, 100)'}}>
                                        Communication between the client and me will be effective and easy.</p>
                                </div>
                            </div>	
                        </div>

                        <div className="col-md-4">
                            <div className="thumbnail">
                                <img src={responsive} alt="Connection" className="thumbimg"/>
                                <div className="caption">
                                    <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Quality Design</h3>
                                    <p style={{fontSize: '16px', textAlign: 'center', color: 'rgb(3, 107, 100)', marginBottom: '30px'}}>
                                        Your project wont only be done with speed but quality design of the project will be assured.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="thumbnail">
                                <img src={webdev} alt="webdevelopment" className="thumbimg" style={{padding:'35px 50px'}}/>
                                <div className="caption">
                                    <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Webdeveloping</h3>
                                    <p style={{fontSize: '16px', textAlign: 'center', color: 'rgb(3, 107, 100)'}}>
                                        I build HTML/CSS, Wordpress, Responsive Website,React Javascript websites
                                        with the skills i have acquired so far.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="container thirdview">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={destination} className="img-responsive" style={{height: '400px'}} alt="dest"/>
                        </div>
                        <div className="col-md-6" style={{textAlign:'left'}}>
                            <h1 style={{fontSize: '80px', fontWeight: 'bold'}}>Thank You For Visiting My Portfolio</h1>
                            <p style={{fontSize: '30px', color: 'rgb(3, 107, 100)'}}>Hope you consider offering me a project to work on</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center" style={{paddingBottom: '20px'}} >
                    <h2>Portfolio Made By Bill</h2>
                    <p style={{color:'grey'}}>Follow me; IG @champ_gobain..Twitter@BillZak3</p>
                </div>
            </div>
         </>
    );
}

export default Home;
