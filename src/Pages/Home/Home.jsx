import React from 'react';
// import dependencies
import { Link } from "react-router-dom";
// import css file
import './Home.css'
//import iamges
import coding from '../../images/coding.svg'
import destination from '../../images/destination.svg'
import educator from '../../images/educator.svg'
import responsive from '../../images/responsive.svg'
import vidcall from '../../images/vidcall.svg'

const Home = () => {
    return (
        <>
              
            <nav className="navbar navbar-default headnav">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button 
                        type="button" 
                        className="navbar-toggle collapsed" 
                        data-toggle="collapse" 
                        data-target="#bs-example-navbar-collapse-1" 
                        aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        BILAL's PORTFOLIO
                    </a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#" className="select">Home</a>
                        </li>
                        <li>
                            <a href="#">About Me</a>
                        </li>
                        <li>
                            <a href="#">Contact Me</a>
                        </li>
                        <li>
                            <a href="#">My Projects</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> 

            <div className="container firstview">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{fontSize: '80px', fontWeight: 'bold'}}>Hi I'm Bilal</h1>
                        <p style={{fontSize: '30px',marginBottom:'40px', color: '#6c63ff'}}>FrontEnd Web Developer currently 
                        studying at a bootcamp called Codetrainb </p>
                        <button type="button" className="btn btn-primary btn-lg">About Me</button>
                        <button type="button" className="btn btn-default btn-lg">Contact Me</button>
                    </div>
                
                    <div className="col-md-6">
                        <img src={educator} className="img-responsive" style={{height: '350px', marginLeft: '180px'}}/>
                    </div>
                </div>
            </div>
            

     
            <div className="container secondview">
                <div className="row">
                    <h1 className="text-center" style={{fontSize: '40px', fontWeight: 'bold', marginBottom: '50px'}}>My Services Provides</h1>
                    <div className="col-md-4">
                    <div className="thumbnail">
                        <img src={vidcall} alt="Easy communication" className="thumbimg"/>
                        <div className="caption">
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Effective Communication</h3>
                            <p style={{fontSize: '16px', textAlign: 'center', color: '#6c63ff'}}>
                                Communication between the client and me will be effective and easy.</p>
                        </div>
                    </div>	
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                        <img src={responsive} alt="Connection" className="thumbimg"/>
                        <div className="caption">
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Quality Design</h3>
                            <p style={{fontSize: '16px', textAlign: 'center', color: '#6c63ff'}}>
                                Your project wont only be done with speed but quality design of the project will assured.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                        <img src={coding} alt="webdevelopment" className="thumbimg"/>
                        <div className="caption">
                            <h3 style={{fontWeight: 'bold', textAlign: 'center'}}>Webdeveloping</h3>
                            <p style={{fontSize: '16px', textAlign: 'center', color: '#6c63ff'}}>
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
                        <img src={destination} className="img-responsive" style={{height: '400px'}}/>
                    </div>
                    <div className="col-md-6">
                        <h1 style={{fontSize: '80px', fontWeight: 'bold'}}>Thank You For Visiting My Portfolio</h1>
                        <p style={{fontSize: '30px', color: '#6c63ff'}}>Hope you consider offering me a project to work on</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center" style={{marginBottom: '50px'}} >
                <h2>Portfolio Made By Bill</h2>
                <p>Follow me; IG @champ_gobain..Twitter@BillZak3</p>
            </div>

         </>
    );
}

export default Home;
