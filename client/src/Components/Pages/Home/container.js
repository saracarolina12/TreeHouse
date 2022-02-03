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
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { postID } from "../../../functions";
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

    const [id, setID] = useState('');


    function idChange(event) {
        // console.log(event.target.value);
        setID(event.target.value)
    }

    function checkID(id){
        var RESULTOFVALIDATING=[true, null], err="";
        if(!id){
            err += `\n<h5 style='color:red'><i>Primero ingresa un ID.</i></h5>`
            RESULTOFVALIDATING[0] = false; RESULTOFVALIDATING[1] = err;
        }
        if(id.length != 7 && id){
            err +=`\n<h5 style='color:red'><i>Este ID no existe</i></h5>`
            RESULTOFVALIDATING[0] = false; RESULTOFVALIDATING[1] = err;
        }
        return RESULTOFVALIDATING;
    }

    const [res, setRes] = useState('')
    
    const getID = (x) =>{
        let validated = checkID(id);
        if(validated[0] === false){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: `${validated[1]}`,  
            })
        }else{
            const sendID = async() => {
                const respuesta = await postID(id);
                console.log("respo: ", respuesta);
                if(respuesta.data === 'Usado'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops...',
                        html: `<h5 style='color:red'><i>¡Ya has usado este ID el día de hoy!</i></h5>\n<h5 style='color:red'><i>Intenta mañana nuevamente</i></h5>`,
                    })
                }else if(respuesta.data === 'Registrado'){
                    Swal.fire({
                        icon: 'success',
                        html: `<h3>Se ha registrado tu ID</h3><br><p>Sin embargo, no eres el visitante #50</p><p>¡Intenta mañana nuevamente!</p>`,
                        showConfirmButton: true,
                        confirmButtonColor:'green'
                    })
                }else if(respuesta.data === 'Ganador'){
                    var codigo = '';
                    for(let i=1; i<=6; i++) codigo += Math.round(Math.random()*10);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        html: `<h3>¡Felicidades eres el visitante #!\nUtiliza el siguiente código para ganar una promoción:</h3>\n<h3 style='color:green'><i>${codigo}</i></h3>`,
                        showConfirmButton: true,
                        confirmButtonColor:'green'
                    })
                }
                return respuesta;
            };
            
            console.log("sendID: ",sendID());
            
            // if(!set.has(id)){ 
            //     // set.add(id);
            //     setSet(prev => new Set(prev.add(id)))
            //     if(localStorage.getItem('numVis') === 50 || localStorage.getItem('numVis')===100 || localStorage.getItem('numVis')===150){
            //         var codigo = '';
            //         for(let i=1; i<=6; i++) codigo += Math.round(Math.random()*10);
            //         Swal.fire({
            //             position: 'top-end',
            //             icon: 'success',
            //             html: `<h3>¡Felicidades eres el visitante #${cont}!\nUtiliza el siguiente código para ganar una promoción:</h3>\n<h3 style='color:green'><i>${codigo}</i></h3>`,
            //             showConfirmButton: true,
            //             confirmButtonColor:'green'
            //         })
            //     }
            // }else{
            //     console.log("ya se usó... ", set);
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Oops...',
            //         html: `<h5 style='color:red'><i>Ya has usado este ID el día de hoy!</i></h5>\n<h5 style='color:red'><i>Intenta mañana nuevamente</i></h5>`,
            //     })
            // }
          }
        }
        

    // useEffect(() => {
    //     // console.log(current.getHours(), " ",current.getMinutes()," ", current.getSeconds());
    //     if(current.getHours() === '24' && current.getMinutes() === '0' && current.getSeconds() === '0'){
    //         cont = 0;
    //         localStorage.setItem('numVisitante', JSON.stringify(0))
    //     }
    //   });

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
                            <div style={{
                                position: "absolute",
                                left: "175%",
                                top: "70%"
                            }}>
                                <h5 style={{color:'green'}}>¡Participa por un regalo!</h5>
                                <Card style={{ width: '18rem' , padding:'1.2rem'}}> 
                                <form>
                                    <label style={{fontSize:'1.2rem', color:'green'}}><i>Ingresa tu ID:</i></label>
                                    <input onChange={idChange} onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }} />
                                <Button style={{backgroundColor:'green'}} onClick={getID}>Participar</Button>
                                </form>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Parallax>
            
                <br/>
            {/* </Container> */}
        </div>
    )
}

export default Cont;