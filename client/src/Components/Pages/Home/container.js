import React from "react"
import Container from 'react-bootstrap/Container'
import './container.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
// import Logo from './Logo.png'
import M from 'materialize-css'
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import logo from './TreeHouse.mp4'


function Cont() {

    const menuChange = (x) =>{
        console.log("menuuu");
        window.location = "/Menu"
    }
    const eventosChange = (x) =>{
        console.log("eventosss");
        window.location = "/Eventos"
    }

    const iconChange = (x) =>{
        Swal.fire({
            position: 'center',
            title: 'Contáctanos',
            html: '<ul><li>FB</li>IG<li></li>Phone<li></li></ul>',
            showConfirmButton: true,
            confirmButtonColor: '#A2D990',
            color:'#467A39'
        })
        
    }

    return (
        
        <Container fluid className="container">
            {/* <br/> */}
            <video autoPlay muted id='video'>
                <source src={logo} type='video/mp4'/>
            </video>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>

            <h1 className="Titulo">¡Bienvenid@!</h1>
            <br/><br/>
            <Button onClick={menuChange} className="menueventos" variant="success">Menú</Button>
            <br/><br/>
            <Button onClick={eventosChange} className="menueventos" variant="success">Eventos</Button>
            <br/><br/>
            <br/><br/>


            <i class="small material-icons right iconColor" onClick={iconChange} >info_outline</i>
        
            <br/>
        </Container>
    )
}

export default Cont;