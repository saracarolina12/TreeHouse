import React from "react"
import { render } from "react-dom";
import Container from 'react-bootstrap/Container'
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
    const [sabor, setSabor] = useState();

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
    

    const [selectAll, setSelectAll] = useState(false);

    const toggleSelectAll = () => {
      setSelectAll(!selectAll);
    };
  
    const imageRenderer = useCallback(
      ({ index, left, top, key, photo }) => (
        <SelectedImage
          selected={selectAll ? true : false}
          key={key}
          margin={"2px"}
          index={index}
          photo={photo}
          left={left}
          top={top}
        />
      ),
      [selectAll]
    );





    return (

        <Container fluid className="container">
            <i class="small material-icons left iconColor" onClick={backChange} >arrow_back</i>

            <br/><br/> 
            <h1 className="TituloMenu">Menú</h1>
            <br/><br/>

            {/* ¿QUÉ TENEMOS? */}

                <DropdownButton id="dropdown-basic-button" title="Comida" variant="success" style={{display : 'inline-block'}} size="lg" >
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
                <DropdownButton id="dropdown-basic-button" title="Bebida" variant="success" style={{display : 'inline-block'}} size="lg" >
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

                <div>
                    <p>
                    <button onClick={toggleSelectAll}>toggle select all</button>
                    </p>
                    <Gallery photos={photos} renderImage={imageRenderer} />
                </div>

        </Container>
    )
}

export default Menu;