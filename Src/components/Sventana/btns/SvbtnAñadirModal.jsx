import { VariableColor } from "../SvModalNewProyect";
import { createElement, useEffect } from "react";
import { useRef } from "react";


export default function SvbtnAñadirPModal(){
    const Funciona = useRef(null);

    
    const ShowMe = () =>{
        document.getElementById("prueba").innerHTML += `<div id= 'prueba2' >hola</div>`
    };

    useEffect(()=>{
        document.getElementById("prueba2").current.addEventListener("click",ShowMe)
    });


    return(
        <div id="prueba">
            <button onClick={ShowMe}  id='SvModalNP__BtnAñadir' >Añadir</button>
            <button ref={Funciona}  id='SvModalNP__BtnAñadir' >Añadir</button>
        </div>
    )
};