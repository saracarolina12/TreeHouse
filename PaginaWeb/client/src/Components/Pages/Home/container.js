import React from "react"
import Container from 'react-bootstrap/Container'
import './container.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
import Logo from './Logo.png'

function Cont() {
    return (
        
        <Container fluid className="container">
            <br/>
            <img src={Logo} alt="logo" className="imgLogo"/>
            <br/><br/>
            <Button className="menueventos" variant="success">Menú</Button>{' '}
            <br/>
            <Button className="menueventos" variant="success">Eventos</Button>{' '}
        </Container>
    )
}

export default Cont;