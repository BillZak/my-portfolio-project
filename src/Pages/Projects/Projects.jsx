import React from 'react';
//import components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
// import css file
import './Projects.css'

const Projects = () => {
    return (
        <div style={{background:'rgb(239, 253, 248)'}}>

                <NavBar/>

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
                
                <Footer/>
               
        </div>
    );
}

export default Projects;
