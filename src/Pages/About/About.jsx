import React from 'react';
import Footer from '../../Components/Footer';
//import components
import NavBar from '../../Components/NavBar';
//import pictures
import npic from '../../images/npic.jpg'
//import css file
import './About.css'


const About = () => {
    return (

        <div style={{background:'rgb(239, 253, 248)'}}>

            <NavBar/>


             <div className="container overview">
                    <div className="row" style={{marginTop:'70px',marginBottom:'200px'}}>

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
                
                <Footer/>
                
        </div>
    );
}

export default About;
