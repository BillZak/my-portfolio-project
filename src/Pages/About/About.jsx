import React from 'react';
//import dependencies
import { Link } from 'react-router-dom';
//import pictures
import npic from '../../images/npic.jpg'
//import css file
import './About.css'


const About = () => {
    return (

        <div style={{background:'rgb(239, 253, 248)'}}>
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

                             <Link to="/" className="navbar-brand" style={{color:'black'}}>BILAL's PORTFOLIO</Link>

                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="select">About Me</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Contact Me</Link>
                            </li>
                            <li>
                                <Link to="/projects">My Projects</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
             </nav> 


             <div className="container overview">
                    <div className="row" style={{marginTop:'70px'}}>

                        <div className="col-md-6">
                            <div className="mypic" style={{textAlign:'left'}}>
                                        <img src={npic} 
                                        className="img-responsive" 
                                        style={{height: '100%',borderRadius:'100px'}} 
                                        alt="me"/>
                            </div>
                        </div>
                    
                        <div className="col-md-6" 
                        style={{background:'white',borderRadius:'100px'}}>
                            <h3 style={{fontSize: '50px',marginBottom:'50px', fontWeight: 'bold',color: 'rgb(3, 107, 100)'}}>ABOUT ME</h3>
                            <p style={{fontSize: '31px',fontFamily: "'PT Sans', sans-serif",textAlign:'left',marginLeft:'20px',marginBottom:'40px'}}>
                                My Name is Bilal Zakari. I'm a FrontEnd web developer currently studying 
                                at in Codetrain in Ghana. I am 18 years old. I dont have any professional 
                                experience at the moment. I'm hoping to get deals so i can help in building 
                                projects so i can build experience and more skill in the process. The programming
                                language i specialize in is javascript. I do most of my projects in Reactjs. In the 
                                near future, I would like to work for any of the big and successful software companies
                                such as Google, Apple, Microsoft, Amazon etc.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center" 
                style={{paddingBottom: '20px',marginTop:"300px"}} >
                    <h2>Portfolio Made By Bill</h2>
                    <p style={{color:'grey'}}>Follow me; IG @champ_gobain..Twitter@BillZak3</p>
                </div>
        </div>
    );
}

export default About;
