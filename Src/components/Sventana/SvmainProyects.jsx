import React, { Component, createElement, useState } from 'react';
import "./style/Svmainproyects.less";
import SvModalproyects from './SvModalproyects';
import SvBtnProyects from './btns/SvBtnProyects';
import { SvHover1,SvHover2,SvHover3,SvHover4,SvHover5 } from './btns/SvbtnAñadirModal';


export default class SvmainProyects extends Component {
  render() {

    const Proyect1Over = () =>{
      let P = document.getElementById('proyect1');
      if(SvHover1 == true){
      P.style.background = 'gray';
      P.style.borderRadius = '5px';
      P.style.color = '';
      }
    };

    const Proyect1Leave = () =>{
      let P = document.getElementById('proyect1');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
    };

    const Proyect2Over = () =>{
      if(SvHover2 = true){
        let P = document.getElementById('proyect2');
      P.style.background = 'gray';
      P.style.borderRadius = '5px';
      P.style.color = '';
      }
    };

    const Proyect2Leave = () =>{
      let P = document.getElementById('proyect2');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
    };

    const Proyect3Over = () =>{
      if(SvHover3 == true){
      let P = document.getElementById('proyect3');
      P.style.background = 'gray';
      P.style.borderRadius = '5px';
      P.style.color = '';
      }
    };

    const Proyect3Leave = () =>{
      let P = document.getElementById('proyect3');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
    };

    const Proyect4Over = () =>{
      if(SvHover4 == true){
      let P = document.getElementById('proyect4');
      P.style.background = 'gray';
      P.style.borderRadius = '5px';
      P.style.color = '';
      }
    };

    const Proyect4Leave = () =>{
      let P = document.getElementById('proyect4');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
    };

    const Proyect5Over = () =>{
      if(SvHover5 == true){
      let P = document.getElementById('proyect5');
      P.style.background = 'gray';
      P.style.borderRadius = '5px';
      P.style.color = '';
      }
    };

    const Proyect5Leave = () =>{
      let P = document.getElementById('proyect5');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
    };
    



    return (
      <div className='SvmainProyects'>
        <SvBtnProyects/>
        <SvModalproyects/>
        <div className='SvmainProyectsdiv2' id='SvmainProyectsdiv2'>
         
          <div onPointerOver={Proyect1Over} onPointerLeave={Proyect1Leave} id='proyect1'>

          </div>

             <div onPointerOver={Proyect2Over} onPointerLeave={Proyect2Leave} id='proyect2'>

          </div>

             <div onPointerOver={Proyect3Over} onPointerLeave={Proyect3Leave} id='proyect3'>

          </div>

          <div onPointerOver={Proyect4Over} onPointerLeave={Proyect4Leave} id='proyect4'>

          </div>
            
            <div onPointerOver={Proyect5Over} onPointerLeave={Proyect5Leave} id='proyect5'>

          </div>
          
            <div id='Warnning'>

            </div>
            
        </div>
      </div>
    )
  }
}
