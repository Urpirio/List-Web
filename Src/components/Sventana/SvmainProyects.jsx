import React, { Component, createElement, useState } from 'react';
import "./style/Svmainproyects.less";
import SvModalproyects from './SvModalproyects';
import SvBtnProyects from './btns/SvBtnProyects';
import { SvHover1,SvHover2,SvHover3,SvHover4,SvHover5 } from './btns/SvbtnAñadirModal';
import { Class } from '../main/SmainText';

export let SvBtnProyects1;
export default class SvmainProyects extends Component {
  render() {
    let n;
    if(n == undefined){
      n = 1;
    };
    

    const Proyect1Over = () =>{
      let P = document.getElementById('proyect1');
      if(SvHover1 == true){
      P.style.background = '#e1dede';
      P.style.borderRadius = '5px';
      P.style.color = '';
      P.style.cursor = 'pointer';
      }
    };

    const Proyect1 = () =>{
      if(SvHover1 == true){
        switch(SvBtnProyects1){
          case 1:
            SvBtnProyects1 = 1;
            document.getElementById('SM__title1').style.display = 'flex';
            break;
          case 2:
            SvBtnProyects1 = 1;
            document.getElementById('SM__title2').style.display = 'none';
            document.getElementById('SM__title1').style.display = 'flex';
            break;
          case 3:
            SvBtnProyects1 = 1;
            document.getElementById('SM__title3').style.display = 'none';
            document.getElementById('SM__title1').style.display = 'flex';
            break;
          case 4:
            SvBtnProyects1 = 1;
            document.getElementById('SM__title4').style.display = 'none';
            document.getElementById('SM__title1').style.display = 'flex';
            break;
          case 5:
            SvBtnProyects1 = 1;
            document.getElementById('SM__title5').style.display = 'none';
            document.getElementById('SM__title1').style.display = 'flex';
            break;
          case 6:
            SvBtnProyects1 = 1;
            document.getElementById('SM__title').style.display = 'none';
            document.getElementById('SM__title1').style.display = 'flex';
            break;
          default:
            SvBtnProyects1 =1;
            document.querySelector('.SM__title').style.display = 'none';
            document.querySelector('#SM__title1').style.display = 'flex';
            break;  
        };
        document.getElementById('SM__list1').style.display = 'flex';
      };

    };
    

    const Proyect1Leave = () =>{
      let P = document.getElementById('proyect1');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
      P.style.cursor = 'none';
    };

    const Proyect2 = () =>{
      if(SvHover2 == true){
        switch(SvBtnProyects1){
          case 1:
            SvBtnProyects1 = 2;
            document.querySelector('#SM__title1').style.display = 'none';
            document.getElementById('SM__title2').style.display = 'flex';
            break;
          case 2:
            SvBtnProyects1 = 2;
            document.getElementById('SM__title2').style.display = 'flex';
            break;
          case 3:
            SvBtnProyects1 = 2;
            document.getElementById('SM__title3').style.display = 'none';
            document.getElementById('SM__title2').style.display = 'flex';
            break;
          case 4:
            SvBtnProyects1 = 2;
            document.getElementById('SM__title4').style.display = 'none';
            document.getElementById('SM__title2').style.display = 'flex';
            break;
          case 5:
            SvBtnProyects1 = 2;
            document.getElementById('SM__title5').style.display = 'none';
            document.getElementById('SM__title2').style.display = 'flex';
            break;
          case 6:
            SvBtnProyects1 = 2;
            document.getElementById('SM__title').style.display = 'none';
            document.getElementById('SM__title2').style.display = 'flex';
            break;
          default:
            SvBtnProyects1 = 2;
            document.querySelector('.SM__title').style.display = 'none';
            document.querySelector('#SM__title3').style.display = 'flex';
            break;  
        };
        document.getElementById('SM__list2').style.display = 'flex';
      };

    };

    const Proyect2Over = () =>{
      
      let P = document.getElementById('proyect2');
      if(SvHover2 == true){
      P.style.background = '#e1dede';
      P.style.borderRadius = '5px';
      P.style.color = '';
      P.style.cursor = 'pointer';
      }
    };

    const Proyect2Leave = () =>{
      let P = document.getElementById('proyect2');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
      P.style.cursor = 'none';
    };

    const Proyect3 = () =>{
      if(SvHover3 == true){
        switch(SvBtnProyects1){
          case 1:
            SvBtnProyects1 = 3;
            document.querySelector('#SM__title1').style.display = 'none';
            document.getElementById('SM__title3').style.display = 'flex';
            break;
          case 2:
            SvBtnProyects1 = 3;
            document.getElementById('SM__title2').style.display = 'none';
            document.getElementById('SM__title3').style.display = 'flex';
            break;
          case 3:
            SvBtnProyects1 = 3;
            document.getElementById('SM__title3').style.display = 'flex';
            break;
          case 4:
            SvBtnProyects1 = 3;
            document.getElementById('SM__title4').style.display = 'none';
            document.getElementById('SM__title3').style.display = 'flex';
            break;
          case 5:
            SvBtnProyects1 = 3;
            document.getElementById('SM__title5').style.display = 'none';
            document.getElementById('SM__title3').style.display = 'flex';
            break;
          case 6:
            SvBtnProyects1 = 3;
            document.getElementById('SM__title').style.display = 'none';
            document.getElementById('SM__title3').style.display = 'flex';
            break;
          default:
            SvBtnProyects1 = 3;
            document.querySelector('.SM__title').style.display = 'none';
            document.querySelector('#SM__title3').style.display = 'flex';
            break;  
        };
        document.getElementById('SM__list3').style.display = 'flex';
      };
    };

    const Proyect3Over = () =>{
      let P = document.getElementById('proyect3');
      if(SvHover3 == true){
      P.style.background = '#e1dede';
      P.style.borderRadius = '5px';
      P.style.color = '';
      P.style.cursor = 'pointer';
      }
    };

    const Proyect3Leave = () =>{
      let P = document.getElementById('proyect3');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
      P.style.cursor = 'none';
    };

    const Proyect4Over = () =>{
      let P = document.getElementById('proyect4');
      if(SvHover4 == true){
      P.style.background = '#e1dede';
      P.style.borderRadius = '5px';
      P.style.color = '';
      P.style.cursor = 'pointer';
      }
    };

    const Proyect4 = () =>{
      if(SvHover4 == 4){
        switch(SvBtnProyects1){
          case 1:
            SvBtnProyects1 = 4;
            document.querySelector('#SM__title1').style.display = 'none';
            document.getElementById('SM__title4').style.display = 'flex';
            break;
          case 2:
            SvBtnProyects1 = 4;
            document.getElementById('SM__title2').style.display = 'none';
            document.getElementById('SM__title4').style.display = 'flex';
            break;
          case 3:
            SvBtnProyects1 = 4;
            document.getElementById('SM__title3').style.display = 'none';
            document.getElementById('SM__title4').style.display = 'flex';
            break;
          case 4:
            SvBtnProyects1 = 4;
            document.getElementById('SM__title4').style.display = 'flex';
            break;
          case 5:
            SvBtnProyects1 = 4;
            document.getElementById('SM__title5').style.display = 'none';
            document.getElementById('SM__title4').style.display = 'flex';
            break;
          case 6:
            SvBtnProyects1 = 4;
            document.getElementById('SM__title').style.display = 'none';
            document.getElementById('SM__title4').style.display = 'flex';
            break;
          default:
            SvBtnProyects1 = 4;
            document.querySelector('.SM__title').style.display = 'none';
            document.querySelector('#SM__title4').style.display = 'flex';
            break;  
        };
        document.getElementById('SM__list4').style.display = 'flex';
      };
    };

    const Proyect4Leave = () =>{
      let P = document.getElementById('proyect4');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
      P.style.cursor = 'none';
    };

    const Proyect5 = () =>{
     if(SvHover5 == true){
      switch(SvBtnProyects1){
        case 1:
          SvBtnProyects1 = 5;
          document.querySelector('#SM__title1').style.display = 'none';
          document.getElementById('SM__title5').style.display = 'flex';
          break;
        case 2:
          SvBtnProyects1 = 5;
          document.getElementById('SM__title2').style.display = 'none';
          document.getElementById('SM__title5').style.display = 'flex';
          break;
        case 3:
          SvBtnProyects1 = 5;
          document.getElementById('SM__title3').style.display = 'none';
          document.getElementById('SM__title5').style.display = 'flex';
          break;
        case 4:
          SvBtnProyects1 = 5;
          document.getElementById('SM__title4').style.display = 'none';
          document.getElementById('SM__title5').style.display = 'flex';
          break;
        case 5:
          SvBtnProyects1 = 5;
          document.getElementById('SM__title5').style.display = 'flex';
          break;
        case 6:
          SvBtnProyects1 = 5;
          document.getElementById('SM__title').style.display = 'none';
          document.getElementById('SM__title5').style.display = 'flex';
          break;
        default:
          SvBtnProyects1 = 5;
          document.querySelector('.SM__title').style.display = 'none';
          document.querySelector('#SM__title5').style.display = 'flex';
          break;  
      };
     };
     document.getElementById('SM__list5').style.display = 'flex';
    };

    const Proyect5Over = () =>{
      let P = document.getElementById('proyect5');
      if(SvHover5 == true){
      P.style.background = '#e1dede';
      P.style.borderRadius = '5px';
      P.style.color = '';
      P.style.cursor = 'pointer';
      }
    };

    const Proyect5Leave = () =>{
      let P = document.getElementById('proyect5');
      P.style.background = '';
      P.style.borderRadius = '0';
      P.style.color = '';
      P.style.cursor = 'none';
    };
    



    return (
      <div className='SvmainProyects'>
        <SvBtnProyects/>
        <SvModalproyects/>
        <div className='SvmainProyectsdiv2' id='SvmainProyectsdiv2'>
         
          <div onPointerOver={Proyect1Over} onPointerLeave={Proyect1Leave} onClick={Proyect1} id='proyect1'>

          </div>

             <div onPointerOver={Proyect2Over} onPointerLeave={Proyect2Leave} onClick={Proyect2} id='proyect2'>

          </div>

             <div onPointerOver={Proyect3Over} onPointerLeave={Proyect3Leave} onClick={Proyect3} id='proyect3'>

          </div>

          <div onPointerOver={Proyect4Over} onPointerLeave={Proyect4Leave} onClick={Proyect4} id='proyect4'>

          </div>
            
            <div onPointerOver={Proyect5Over} onPointerLeave={Proyect5Leave} onClick={Proyect5} id='proyect5'>

          </div>
          
            <div id='Warnning'>

            </div>
            
        </div>
      </div>
    )
  }
}
