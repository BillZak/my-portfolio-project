import React from 'react';
// import dependencies
import { Link } from 'react-router-dom';
// import css file
import './Contacts.css'

const Contacts = () => {
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
                                <Link to="/about">About Me</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="select">Contact Me</Link>
                            </li>
                            <li>
                                <Link to="/projects">My Projects</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> 

                <div className="container contact">
                      <h1 style={{margin: "50px 0px",fontSize:'40px',fontWeight:'bold',color: 'rgb(3, 107, 100)'}}>
                          Contact Me On These Socials</h1>

                      <a href="http://bzak954@gmail.com">
                      <div className="media">
                           <p>
                              Click Here To Take You To My <span className="socials">Email</span> Inbox
                           </p>
                      </div>
                      </a>
                      <a href="https://www.linkedin.com/in/bilal-zakari-9399a0220/">
                      <div className="media">
                           <p>
                              Click Here To Visit My <span className="socials">LinkedIn</span> Page
                           </p>
                      </div>
                      </a>
                      <a href="http://twitter.com/BillZak3">
                      <div className="media">
                           <p>
                              Click Here To Visit My <span className="socials">Twitter</span> Page
                           </p>
                      </div>
                      </a>
                      <a href="http://wa.link/20ac5y">
                      <div className="media">
                           <p>
                              CLick Here To <span className="socials">What's App</span> Me
                           </p>
                      </div>
                      </a>
                </div>

                <div className="container-fluid text-center" style={{paddingBottom: '20px'}} >
                    <h2>Portfolio Made By Bill</h2>
                    <p>Phone: +233 209 688 728</p>
                    <p style={{color:'grey'}}>Follow me; IG @champ_gobain..Twitter@BillZak3</p>
                </div>
        </div>
    );
}

export default Contacts;
