import React, { Component } from 'react';
import logo from './image_component/logo_empresa.png';
import './Header.css';


class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">HOME</a></li>
            <li><a className="smoothscroll" href="#about">VANGUARD CODE LABS</a></li>
	         <li><a className="smoothscroll" href="#resume">CONSULTORIA IT</a></li>
            <li><a className="smoothscroll" href="#portfolio">ESCUELA DIGITAL</a></li>
            <li><a className="smoothscroll" href="#testimonials">FILOSOFIA</a></li>
            <li><a className="smoothscroll" href="#contact">CONTACTO</a></li>
         </ul>

      </nav>

      <div className="row banner">
      <p>
         <img src={logo} className="App-logo" alt="logo" />
            </p>
         <div className="banner-text">
            <hr />
            <ul className="social">
               {networks}
            </ul>
              <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
         </div>
      </div>

    
   </header>
    );
  }
}

export default Header;
