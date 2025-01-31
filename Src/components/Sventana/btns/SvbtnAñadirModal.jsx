import { VariableColor } from "../SvModalNewProyect";
import { createElement, useEffect } from "react";
import { useRef } from "react";
import './style/SvbtnAñadirModal.less';

export let SvHover1;
export let SvHover2;
export let SvHover3;
export let SvHover4;
export let SvHover5;
export let SvInfo;

export default function SvbtnAñadirPModal(){
    let num;
    const Prub = () => {

        if(SvInfo == undefined){
            SvInfo = 1;
            let N = document.getElementById('SM_titles');
            N.innerHTML += `<h1 id = 'SM__title${SvInfo}' class = 'SM__title' >${document.getElementById('Nombre').value}</h1>`;
          }else if(SvInfo == 1){
            SvInfo = SvInfo + 1;
            let N = document.getElementById('SM_titles');
            N.innerHTML += `<h1 id = 'SM__title${SvInfo}' class = 'SM__title' >${document.getElementById('Nombre').value}</h1>`;
          }else if(SvInfo == 2){
            SvInfo = SvInfo + 1;
            let N = document.getElementById('SM_titles');
            N.innerHTML += `<h1 id = 'SM__title${SvInfo}' class = 'SM__title' >${document.getElementById('Nombre').value}</h1>`;
          }else if(SvInfo == 3){
            SvInfo = SvInfo + 1;
            let N = document.getElementById('SM_titles');
            N.innerHTML += `<h1 id = 'SM__title${SvInfo}' class = 'SM__title' >${document.getElementById('Nombre').value}</h1>`;
          }else if(SvInfo == 4){
            SvInfo = SvInfo + 1;
            let N = document.getElementById('SM_titles');
            N.innerHTML += `<h1 id = 'SM__title${SvInfo}' class = 'SM__title' >${document.getElementById('Nombre').value}</h1>`;
          }else if(SvInfo > 4){
            //colocar unafuncion que despliuegue algo que diga erro ya no se admite mas cambios.
          };
        

        if(num == undefined){
            num = 1;
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    SvHover1 = true;
                    document.getElementById('Nombre').value = '';
                    break;
                case 2:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover1 = true;
                    break;
                case 3:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover1 = true;
                    break;  
                case 4:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover1 = true;
                    break; 
                case 5:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover1 = true;
                    break;
                case 6:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover1 = true;
   
                    break;
                default:
                    document.getElementById('proyect1').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    <i id = 'PnNombre' >${document.getElementById('Nombre').value}</i></div>`;
                    SvHover1 = true;
                    break;

            }
        }else if(num == 1){
            num = num + 1
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover2 = true;
                    break;
                case 2:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover2 = true;
                    break;
                case 3:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover2 = true;
                    break;  
                case 4:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover2 = true;
                    break; 
                case 5:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover2 = true;
                    break;
                case 6:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover2 = true;
                    break;
                default:
                    document.getElementById('proyect2').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover2 = true;
                    break;

            };
        }else if(num == 2){
            num = num + 1
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover3 = true;
                    break;
                case 2:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover3 = true;
                    break;
                case 3:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover3 = true;
                    break;  
                case 4:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover3 = true;
                    break; 
                case 5:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover3 = true;
                    break;
                case 6:
                    document.getElementById('proyect3').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover3 = true;
                    break;
                default:
                    document.getElementById('proyect3').innerHTML = `<div><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover3 = true;
                    break;

            };
        }else if(num == 3){
            num = num + 1;
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover4 = true;
                    break;
                case 2:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover4 = true;
                    break;
                case 3:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover4 = true;
                    break;  
                case 4:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover4 = true;
                    break; 
                case 5:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover4 = true;
                    break;
                case 6:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover4 = true;
                    break;
                default:
                    document.getElementById('proyect4').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover4 = true;
                    break;

            };
        }else if(num == 4){
            num = num + 1;
            switch(VariableColor){
                case 1:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pazul' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover5 = true;
                    break;
                case 2:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Projo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover5 = true;
                    break;
                case 3:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pverde' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover5 = true;
                    break;  
                case 4:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pamarillo' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover5 = true;
                    break; 
                case 5:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pmorado' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover5 = true;
                    break;
                case 6:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover5 = true;
                    break;
                default:
                    document.getElementById('proyect5').innerHTML = `<div id = 'Pnegro' ><i>#</i>
                    ${document.getElementById('Nombre').value}</div>`;
                    document.getElementById('Nombre').value = '';
                    SvHover5 = true;
                    break;

            };
        }else if(num > 4){
            document.getElementById('Warnning').style.display = "flex";
        };

      

    };
    

    return(
        <div id="prueba">
            <button onClick={Prub}  id='SvModalNP__BtnAñadir' >Añadir</button>
        </div>
    )
};