import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import ukrania from './noalaguerra.png';

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
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre Nosotros</a></li>
	         <li><a className="smoothscroll" href="#resume">Servicios</a></li>
            <li><a className="smoothscroll" href="#portfolio">Incubadora</a></li>
            <li><a className="smoothscroll" href="#testimonials">Filosofia</a></li>
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
         </ul>

      </nav>

      <div className="row banner">
      <p>
         <img src={logo} className="App-logo" alt="logo" />
            </p>
         <div className="banner-text">
            <h2 className="responsive-headline">PentaPrism IT</h2>
            <h4>PentaPrism IT{description}.</h4>
            <hr />
            <ul className="social">
               {networks}
            </ul>
            <img src={ukrania} alt="NO A LA GUERRA" />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header>
    );
  }
}

export default Header;
