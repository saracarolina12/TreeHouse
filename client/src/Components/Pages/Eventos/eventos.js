import React from "react"
import Container from 'react-bootstrap/Container'
import './eventos.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { sendEvent } from "../../../functions/index.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function Eventos() {

    const backChange = (x) =>{
        window.location = "/";
    }
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState("");
    const [people, setPeople] = useState(3);
    const [mail, setMail] = useState("");
    const nameChanged = (e) => {
        const {value} = e.target;
        setName(value);
        console.log(name);
    }
    const mailChanged = (e) => {
        const {value} = e.target;
        setMail(value);
    }
    const peopleChanged = (e) => {
        const {value} = e.target;
        setPeople(value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        var day = startDate.getDate().toString();
        var m = startDate.getMonth() + 1;
        var month = (m < 10? "0": "") + m.toString();
        var year = startDate.getFullYear().toString();
        var dateOfEvent = day + "/" + month + "/" + year;
        var send = {
            nombre: name,
            correo: mail,
            nPersonas: people,
            fecha: dateOfEvent
        };
        console.log(await sendEvent(send));
        setName("");
        setMail("");
        setPeople(3);
        setStartDate(new Date());
        MySwal.fire({
            title: "Evento registrado.",
            icon: "success",
            text: "Pronto nos pondremos en contacto",
            confirmButtonText: "¡Entendido!",
          });
    }
    
    return (
        
        <Container fluid className="container" style={{marginTop:'3.5rem'}}>
            <i class="small material-icons left iconColor" onClick={backChange} >arrow_back</i>
            <h1 className="TituloEventos" style={{backgroundColor:'#DFF8D5'}}>Eventos</h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '65vh'}}>
                <form className="col s12" onSubmit={onSubmitHandler}>
                    <h4>Contacto</h4>
                    <br></br>
                    <div className="row">
                        <div className="input-field col s10">
                            <input id="nombre" type="text" onChange = {nameChanged} value = {name} required/>
                            <label htmlFor="first_name">Nombre</label>
                        </div>
                            <div className="input-field col s10">
                                <input id="email" type="email" onChange = {mailChanged}  value = {mail} required/>
                                <label htmlFor="email">Email</label>
                            </div>
                    </div>
                    <h4>Datos del evento</h4>
                    <br></br>
                    <div className="row inline">
                        <div className="col s5">
                            <div className="input-field">
                                <input type="number" value = {people} id = "people" min = "1" max = "500" onChange = {peopleChanged} required/>
                                <label htmlFor="people">Personas</label>
                            </div>
                        </div>
                        <div className="col s5">
                            <div className="input-field">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                            </div>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn" style={{backgroundColor:'#DFF8D5'}}>
                            <i className="material-icons right">send</i>Solicitar
                    </button>
                </form>
            </div>
        </Container>
    )
}

export default Eventos;