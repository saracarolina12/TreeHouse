import React from "react"
import { render } from "react-dom";
import Container from 'react-bootstrap/Container'
import {Row, Col, ButtonGroup} from 'react-bootstrap'
import './menu.css';
import Button from 'react-bootstrap/Button'
// import Logo from './Logo.png'
import M from 'materialize-css'
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.min.css"
import { Dropdown, DropdownItem, DropdownMenu, DropdowmToggle, SplitButton, DropdownButton } from 'react-bootstrap'
import { useEffect, useState, useCallback } from 'react';
import { getCategorias, getSabores} from "../../../functions/index.js";

import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";
import { photos } from "./photos";



function Menu() {
    const [categoria, setCategoria] = useState();

    const backChange = (x) =>{
        window.location = "/";
    }

    useEffect(() => {
        const fetchData = async() => {
            const resCateg = await getCategorias();
            setCategoria(resCateg);
        };
        fetchData();
    }, []);
    const imageRenderer = useCallback(
      ({ index, left, top, key, photo }) => (
        <SelectedImage
          key={key}
          margin={"2px"}
          index={index}
          photo={photo}
          left={left}
          top={top}
        />
      ),
      []
    );

    return (

        <Container fluid className="container">
            <Row className="align-items-center header" style={{backgroundColor:'#DFF8DF'}}>
                <Col lg="auto">
                    <i className="small material-icons left iconColor arrow" onClick={backChange} >arrow_back</i>
                </Col>
                <Col>
                    <h1 className="TituloMenu">Menú</h1>
                </Col>
            </Row>

            <br/><br/>
                <Row className="align-items-center justify-content-md-center buttons">
                    <Col>
                        <center>
                            <DropdownButton title="Comida" variant="success"  size="lg" >
                                {categoria && categoria.map((cat) =>{
                                    if(cat[1] === 'Comida')
                                    return(
                                        <Dropdown.Item onClick={async e => {
                                            var flavors = await getSabores(cat[0]), list = "";
                                            flavors.map(x => list += `<li>${x}<\li>`);
                                            Swal.fire(
                                                {
                                                    position:'center',
                                                    title: cat[0],
                                                    html: '<ul>' + list + '</ul>',
                                                    showConfirmButton: true,
                                                    confirmButtonColor: '#467a39',
                                                }
                                                )
                                            }}>
                                                {cat[0]}
                                            </Dropdown.Item>
                                        )
                                    })}
                            </DropdownButton>
                        </center>
                    </Col>
                    <Col>
                        <center>
                                <DropdownButton title="Bebida" variant="success" size="lg" >
                                    {categoria && categoria.map((cat) =>{
                                        if(cat[1] === 'Bebida')
                                        return(
                                            <Dropdown.Item onClick={async e => {
                                                var flavors = await getSabores(cat[0]), list = "";
                                                flavors.map(x => list += `<li>${x}<\li>`);
                                                Swal.fire(
                                                    {
                                                        position:'center',
                                                        title: cat[0],
                                                        html: '<ul>' + list + '</ul>',
                                                        showConfirmButton: true,
                                                        confirmButtonColor: '#467a39',
                                                    }
                                                    )
                                                }}>
                                                    {cat[0]}
                                                </Dropdown.Item>
                                            )
                                        })}
                                </DropdownButton>   
                            </center>
                    </Col>
                </Row>

            <br/><br/>

            <div>
                <Gallery photos={photos} renderImage={imageRenderer} />
            </div>

        </Container>
    )
}

export default Menu;