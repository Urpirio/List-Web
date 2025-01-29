import { VariableColor } from "../SvModalNewProyect";
import { createElement, useEffect } from "react";
import { useRef } from "react";

export let SvHover1;
export let SvHover2;
export let SvHover3;
export let SvHover4;
export let SvHover5;
export default function SvbtnAñadirPModal(){
    let num;
    const Prub = () => {
        
        
        
        if(num == undefined){
            num = 1;
            alert(num)
            alert(VariableColor)
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    break;
                case 2:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    break;
                case 3:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    break;  
                case 4:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    break; 
                case 5:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    break;
                case 6:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    break;
                default:
                    document.getElementById('proyect1').innerHTML = `<div><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    break;

            }
        }else if(num == 1){
            num = num + 1
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover2 = true;
                    break;
                case 2:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover2 = true;
                    break;
                case 3:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover2 = true;
                    break;  
                case 4:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover2 = true;
                    break; 
                case 5:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover2 = true;
                    break;
                case 6:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover2 = true;
                    break;
                default:
                    document.getElementById('proyect2').innerHTML = `<div><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover2 = true;
                    break;

            };
        }else if(num == 2){
            num = num + 1
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover3 = true;
                    break;
                case 2:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover3 = true;
                    break;
                case 3:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover3 = true;
                    break;  
                case 4:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover3 = true;
                    break; 
                case 5:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover3 = true;
                    break;
                case 6:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover3 = true;
                    break;
                default:
                    document.getElementById('proyect3').innerHTML = `<div><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover3 = true;
                    break;

            };
        }else if(num == 3){
            num = num + 1;
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover4 = true;
                    break;
                case 2:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover4 = true;
                    break;
                case 3:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover4 = true;
                    break;  
                case 4:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover4 = true;
                    break; 
                case 5:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover4 = true;
                    break;
                case 6:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover4 = true;
                    break;
                default:
                    document.getElementById('proyect4').innerHTML = `<div><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover4 = true;
                    break;

            };
        }else if(num == 4){
            num = num + 1;
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover5 = true;
                    break;
                case 2:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover5 = true;
                    break;
                case 3:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover5 = true;
                    break;  
                case 4:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover5 = true;
                    break; 
                case 5:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover5 = true;
                    break;
                case 6:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover5 = true;
                    break;
                default:
                    document.getElementById('proyect5').innerHTML = `<div><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover5 = true;
                    break;

            };
        }else if(num > 4){
            document.getElementById('Warnning').style.display = "flex";
        }
    };
    

    return(
        <div id="prueba">
            <button onClick={Prub}  id='SvModalNP__BtnAñadir' >Añadir</button>
        </div>
    )
};