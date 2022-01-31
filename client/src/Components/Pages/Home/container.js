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
import { Parallax, Background } from "react-parallax";

  const insideStyles = {
    // background: "white",
    // padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

function Cont() {

    const image4 = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxbiScO3PX80CgzWk5uTYQS7BHAh9vOWJ2g&usqp=CAU";
    const image1 = "https://cdn.pixabay.com/photo/2016/06/02/02/31/background-1430103_960_720.png";


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
        <div className="cont" > 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Container fluid className="container"> */}

                <Parallax
                    bgImage={image1}
                    strength={300}
                    renderLayer={(percentage) => (
                        <div>
                            <video autoPlay muted id='video' style={{opacity: 1.2 - percentage}}>
                                <source src={logo} type='video/mp4'/>
                            </video>
                            <div
                                style={{
                                    position: "absolute",
                                    background: `rgba(235, 229, 210, ${percentage * 1})`,
                                    left: "50%",
                                    top: "50%",
                                    borderRadius: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: percentage * 750,
                                    height: percentage * 750
                                }}
                                />
                        </div>
                    )}
                >
                    <div style={{ height: 620 }}>
                        <div style={insideStyles}>
                            <h1 className="Titulo">¡Bienvenid@!</h1>
                            <br/><br/>
                            <Button onClick={menuChange} className="menueventos" variant="success">Menú</Button>
                            <br/><br/>
                            <Button onClick={eventosChange} className="menueventos" variant="success">Eventos</Button>
                            <br/><br/>
                            <br/><br/>
                            <i class="small material-icons right iconColor" onClick={iconChange} >info_outline</i>
                        </div>
                    </div>
                </Parallax>
            
                <br/>
            {/* </Container> */}
        </div>
    )
}

export default Cont;