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
            html: '<h1>Misión</h1>\n<p>Un día lleno de trabajo requiere una alimentación deliciosa y nutritiva, pensada para iniciar el día con buena actitud.\nNuestra misión es otorgar alimentos prácticos que no distraen al comensal de aquello que más importa, la convivencia y el trabajo responsable. Creamos los distintos porductos Tree House para que sean alimentos ideales en reuniones empresariales y eventos.</p>\n\n  <h1>Visión</h1>\n<p>Tree House desea ofrecer alimentos frescos y naturales, cuya combinación de ingredientes formen un menú con variedad de alimentos en conjunto con snacks y bebidas; buscando lograr el equilibrio perfecto entre el disfrute del paladar y la nutrición del comensal, manteniendo siempre excelente calidad y servicio.</p>',
            showConfirmButton: true,
            confirmButtonColor: '#A2D990',
            color:'#467A39'
        })
        
    }

    const current = new Date();
    const [id, setID] = useState('');
    const set = new Set();
    let cont = 0;

    function idChange(event) {
        // console.log(event.target.value);
        setID(event.target.value)
    }

    const getID = (x) =>{
        console.log("visitas: ", JSON.parse(localStorage.getItem('IDvisits')));
        if(!set.has(id)){
            
            console.log("no se ha usado", set, " cont: ", cont + 1);
            localStorage.setItem('numVisitante', JSON.stringify(cont+1))
            set.add(id);
            if(JSON.parse(localStorage.getItem('numVisitante')) === 5 || JSON.parse(localStorage.getItem('numVisitante'))===100 || JSON.parse(localStorage.getItem('numVisitante'))===150){
                var codigo = '';
                for(let i=1; i<=6; i++) codigo += Math.round(Math.random()*10);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    html: `<h3>¡Felicidades eres el visitante #${cont}!\nUtiliza el siguiente código para ganar una promoción:</h3>\n<h3 style='color:green'><i>${codigo}</i></h3>`,
                    showConfirmButton: true,
                    confirmButtonColor:'green'
                })
            }
        }else{
            console.log("ya se usó");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: `<h5 style='color:red'><i>Ya has usado este ID el día de hoy!</i></h5>\n<h5 style='color:red'><i>Intenta mañana nuevamente</i></h5>`,
                
              })
        }
    }

    useEffect(() => {
        // console.log(current.getHours(), " ",current.getMinutes()," ", current.getSeconds());
        if(current.getHours() === '24' && current.getMinutes() === '0' && current.getSeconds() === '0'){
            cont = 0;
            localStorage.setItem('numVisitante', JSON.stringify(0))
        }
      });

    return (
        
        <Container fluid className="container" > 
            <h1 className="Titulo">¡Bienvenid@!</h1>
            <br/><br/>
            <Button onClick={menuChange} className="menueventos" variant="success">Menú</Button>
            <br/><br/>
            <Button onClick={eventosChange} className="menueventos" variant="success">Eventos</Button>
            <i class="small material-icons right iconColor" onClick={iconChange} >info_outline</i>

            <h5 style={{color:'green'}}>¿Te gustaría ganar una promoción <br/> en nuestros productos?</h5>
            <Card style={{ width: '18rem' , padding:'1.2rem'}}> 
            <form>
                <label style={{fontSize:'1.2rem', color:'green'}}><i>Ingresa tu ID para participar: </i></label>
                <input onChange={idChange} onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }} />
            <Button style={{backgroundColor:'green'}} onClick={getID}>Participar!</Button>
            </form>
            </Card>

            
        </Container>
    )
}

export default Cont;