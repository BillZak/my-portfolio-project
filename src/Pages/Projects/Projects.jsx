import React from 'react';
// import dependencies
import { Link } from 'react-router-dom';
// import css file
import './Projects.css'

const Projects = () => {
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
                                <Link to="/contacts">Contact Me</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="select">My Projects</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> 

                <div className="container projects">

                    <h1 style={{margin: "50px 0px",fontSize:'40px',fontWeight:'bold',color: 'rgb(3, 107, 100)'}}>
                        Check Out My Projects</h1>

                    <div className="row" style={{marginTop:'70px',marginBottom:'50px'}}>
                        <div className="col-md-6">

                            <a href="https://serene-lamport-595b14.netlify.app/">
                            <div className="project">
                                <p>
                                    HotPlate Restaurant Website Project
                                </p>
                            </div>
                            </a>

                            <a href="http://github-profile-searcher-app.netlify.app">
                            <div className="project">
                                <p>
                                    GitHub User Profile Searcher Project
                                </p>
                            </div>
                            </a>

                            <a href="https://kawolegal-reactrouting-project.netlify.app/">
                            <div className="project">
                                <p>
                                    KawoLegal Website Project
                                </p>
                            </div>
                            </a>

                            <a href="http://movie-app-practice-project.netlify.app">
                            <div className="project">
                                <p>
                                    Movie Review App Project
                                </p>
                            </div>
                            </a>

                        </div>
                    
                        <div className="col-md-6">

                                <a href="http://theme-clock-app-project.netlify.app">
                                <div className="project">
                                    <p>
                                        Theme Clock Project
                                    </p>
                                </div>
                                </a>

                                <a href="http://drinkwater-app-project.netlify.app">
                                <div className="project">
                                    <p>
                                        Drink Water App Project
                                    </p>
                                </div>
                                </a>

                                <a href="http://randomchoice-picker-app.netlify.app">
                                <div className="project">
                                    <p>
                                        Random Choice Picker App Project
                                    </p>
                                </div>
                                </a>

                                <a href="http://dad-jokes-application.netlify.app">
                                <div className="project">
                                    <p>
                                        Dad Joke App Project
                                    </p>
                                </div>
                                </a> 

                        </div> 
                    </div>

                    <a href="https://github.com/BillZak?tab=repositories" 
                    className="linkprojects">See_More__________</a>
                    
                </div>
                

                <div className="container-fluid text-center" style={{paddingBottom: '20px'}} >
                    <h2>Portfolio Made By Bill</h2>
                    <p style={{color:'grey'}}>Follow me; IG @champ_gobain..Twitter@BillZak3</p>
                </div>
        </div>
    );
}

export default Projects;
