import React from "react"
import Container from 'react-bootstrap/Container'
import './menu.css';
import Button from 'react-bootstrap/Button'
// import Logo from './Logo.png'
import M from 'materialize-css'
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.min.css"
import { Dropdown, DropdownItem, DropdownMenu, DropdowmToggle } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { getCategorias, getSabores} from "../../../functions/index.js";



function Menu() {
    const [categoria, setCategoria] = useState();
    const [sabor, setSabor] = useState();

    const ChangeCategoria = (x) =>{
        // Swal.fire({
        //     position: 'center',
        //     title: `${x}`,
            
        //     showConfirmButton: true,
        //     confirmButtonColor: '#467a39',
        // })
        var cate = JSON.parse(localStorage.getItem('cat'));
        console.log("categoria: ", cate);
    }

    const ChangeSabor = (x) =>{

    }

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
    return (
        
        <Container fluid className="container">
            <i class="small material-icons left iconColor" onClick={backChange} >arrow_back</i>

            <br/><br/>
            <h1 className="TituloMenu">Menú</h1>
            <br/><br/>

            {/* ¿QUÉ TENEMOS? */}
            <Dropdown className="Options" >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Lo que tenemos
                </Dropdown.Toggle>

                <Dropdown.Menu >
                   {categoria && categoria.map((cat) =>{
                       return(
                            <Dropdown.Item onClick={(e) => 
                                Swal.fire({
                                    position:'center', 
                                    title: cat,
                                    html:  `${getSabores(cat)}`,
                                    showConfirmButton: true,
                                    confirmButtonColor: '#467a39',
                                })}>
                                {cat}
                            </Dropdown.Item>
                       )
                   })}
                </Dropdown.Menu>
            </Dropdown>

            <br/><br/>
            <br/><br/>
        </Container>
    )
}

export default Menu;