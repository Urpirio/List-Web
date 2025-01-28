import React, { Component } from 'react';
import { useState } from 'react';
import SvSelect1 from './SvSelect1';
import SvBtnColors from './btns/SvBtnColors';
import SvBtnCloseModalp from './btns/SvbtnCloseModal';
import SvColorData from './Data/SvColorData';
import "./style/SvModalNewProyect.less";


export default function SvModalNewProyect(){


    const ColorDatalist = SvColorData.map( SDL =>{
        return(
            <SvSelect1 Clickfun = {SDL.change} color ={SDL.color} Svcolor = {SDL.Svcolor}  className = {SDL.className}/>
        );
    });
   
    const [text, setText] = useState('HOLA');

    const ChangeText = (e)=>{
      setText(e.target.value)
      to
    };

    return (
      <dialog className='SvModalNewProyect' id='SvModalNewProyect' open>
        <div className='SvModalNP__div1'>
            <h2>Añadir proyecto<i class='bx bx-question-mark' ></i></h2>
            <SvBtnCloseModalp/>
        </div>
        <div className='SvModalNP__div2'>
            <div className='SvModalNP__d2_div1'>
                <label htmlFor="Nombre">Nombre</label>
                <input onChange={ChangeText} type="text" name='Nombre' value={text}  id='Nombre' maxLength={120}/>
            </div>
            <div className='SvModalNP__d2_div2'>
            <span onChange={()=>{
              alert("Funciona")
            }}>{text}/120</span>
            </div>
        </div>
        <div className='SvModalNP__div3'>
            <div className='SvModalNP__d3_div1' >
            <h3>Color</h3>
            <SvBtnColors/>
            </div>
            <dialog className='SvModalNP__d3_div2' id='SvModalNP__d3_div2' open>
                {ColorDatalist}
            </dialog>
            
        </div>
        <div className='SvModalNP__div4'>
              <button  id='SvModalNP__BtnCancelar'>Cancelar</button>
              <button id='SvModalNP__BtnAñadir' >Añadir</button>
            </div>
      </dialog>
    );
  };

