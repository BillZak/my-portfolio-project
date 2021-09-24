import React from 'react';
//import components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
// import css file
import './Contacts.css'

const Contacts = () => {
    return (
        <div style={{background:'rgb(239, 253, 248)'}}>

                <NavBar/>

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

                <Footer/>

        </div>
    );
}

export default Contacts;
