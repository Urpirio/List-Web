import React, { Component } from 'react';
import { useState } from 'react';
import SvSelect1 from './SvSelect1';
import SvBtnColors from './btns/SvBtnColors';
import SvBtnCloseModalp from './btns/SvbtnCloseModal';
import SvColorData from './Data/SvColorData';
import "./style/SvModalNewProyect.less";
import { SvbtnCancelarModal } from './btns/SvbtnCancelarModal';
import SvbtnAñadirPModal from './btns/SvbtnAñadirModal';


export let VariableColor;
export default function SvModalNewProyect(){

  
    // const ColorDatalist = SvColorData.map( SDL =>{
    //     return(
    //         <SvSelect1 color ={SDL.color} Svcolor = {SDL.Svcolor}  className = {SDL.className}/>
    //     );
    // });

   

    const SelectAzul = () =>{
      let SvModalNP__div1_Span1 = document.getElementById("SvModalNP__div1_Span1");
      switch (VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 1;
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          VariableColor = 1;
          break;
        case 2:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectRojo").style.display = "flex";
          VariableColor = 1;
          break;
        case 3:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectVerde").style.display = "flex";
          VariableColor = 1;
          break;
        case 4:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectAmarrillo").style.display = "flex";
          VariableColor = 1;
          break;
        case 5:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectMorado").style.display = "flex";
          VariableColor = 1;
          break;
        case 6:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Azul'></i>Azul`;
          document.getElementById("SvSelectAzul").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 1;
          break
        default:
          alert("Existe un error en el Switch en el documento SvModalNewProyects Linea 36");
          break;  
      };
      document.getElementById('SvModalNP__d3_div2').style.display = 'none';
    };

    const SelectRojo = () =>{
      
      switch(VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectRojo").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 2;
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectAzul").style.display = "flex";
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
        case 2:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
        case 3:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectVerde").style.display = "flex";
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
        case 4:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectAmarrillo").style.display = "flex";
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
        case 5:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectMorado").style.display = "flex";
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
        case 6:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Rojo'></i>Rojo`;
          document.getElementById("SvSelectNegro").style.display = "flex";
          document.getElementById("SvSelectRojo").style.display = "none";
          VariableColor = 2;
          break;
      };
      document.getElementById('SvModalNP__d3_div2').style.display = 'none';
    };

    const SelectVerde = () =>{
     
      switch(VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Verde'></i>Verde`;
          document.getElementById("SvSelectVerde").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 3;
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Verde'></i>Verde`;
          document.getElementById("SvSelectAzul").style.display = "flex";
          document.getElementById("SvSelectVerde").style.display = "none";
          VariableColor = 3;
          break;
        case 2:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Verde'></i>Verde`;
          document.getElementById("SvSelectRojo").style.display = "flex";
          document.getElementById("SvSelectVerde").style.display = "none";
          VariableColor = 3;
          break;
        case 3:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Verde'></i>Verde`;
          document.getElementById("SvSelectVerde").style.display = "none";
          VariableColor = 3;
          break;
        case 4:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Verde'></i>Verde`;
          document.getElementById("SvSelectAmarrillo").style.display = "flex";
          document.getElementById("SvSelectVerde").style.display = "none";
          VariableColor = 3;
          break;
        case 5:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Verde'></i>Verde`;
          document.getElementById("SvSelectMorado").style.display = "flex";
          document.getElementById("SvSelectVerde").style.display = "none";
          VariableColor = 3;
          break;
        case 6:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Verde'></i>Verde`;
          document.getElementById("SvSelectNegro").style.display = "flex";
          document.getElementById("SvSelectVerde").style.display = "none";
          VariableColor = 3;
          break;
      };
      document.getElementById('SvModalNP__d3_div2').style.display = 'none';
    };

    const SelectAmarrillo = () =>{

      switch(VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Amarillo'></i>Amarillo`;
          document.getElementById("SvSelectAmarrillo").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 4;
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Amarillo'></i>Amarillo`;
          document.getElementById("SvSelectAzul").style.display = "flex";
          document.getElementById("SvSelectAmarrillo").style.display = "none";
          VariableColor = 4;
          break;
        case 2:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Amarillo'></i>Amarillo`;
          document.getElementById("SvSelectRojo").style.display = "flex";
          document.getElementById("SvSelectAmarrillo").style.display = "none";
          VariableColor = 4;
          break;
        case 3:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Amarillo'></i>Amarillo`;
          document.getElementById("SvSelectVerde").style.display = "flex";
          document.getElementById("SvSelectAmarrillo").style.display = "none";
          VariableColor = 4;
          break;
        case 4:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Amarillo'></i>Amarillo`;
          document.getElementById("SvSelectAmarrillo").style.display = "none";
          VariableColor = 4;
          break;
        case 5:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Amarillo'></i>Amarillo`;
          document.getElementById("SvSelectMorado").style.display = "flex";
          document.getElementById("SvSelectAmarrillo").style.display = "none";
          VariableColor = 4;
          break;
        case 6:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Amarillo'></i>Amarillo`;
          document.getElementById("SvSelectNegro").style.display = "flex";
          document.getElementById("SvSelectAmarrillo").style.display = "none";
          VariableColor = 4;
          break;
      };
      document.getElementById('SvModalNP__d3_div2').style.display = 'none';
    };

    const SelectMorado = () =>{
      
      switch(VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Morado'></i>Morado`;
          document.getElementById("SvSelectMorado").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 5;
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Morado'></i>Morado`;
          document.getElementById("SvSelectAzul").style.display = "flex";
          document.getElementById("SvSelectMorado").style.display = "none";
          VariableColor = 5;
          break;
        case 2:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Morado'></i>Morado`;
          document.getElementById("SvSelectRojo").style.display = "flex";
          document.getElementById("SvSelectMorado").style.display = "none";
          VariableColor = 5;
          break;
        case 3:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Morado'></i>Morado`;
          document.getElementById("SvSelectVerde").style.display = "flex";
          document.getElementById("SvSelectMorado").style.display = "none";
          VariableColor = 5;
          break;
        case 4:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Morado'></i>Morado`;
          document.getElementById("SvSelectAmarrillo").style.display = "flex";
          document.getElementById("SvSelectMorado").style.display = "none";
          VariableColor = 5;
          break;
        case 5:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Morado'></i>Morado`;
          document.getElementById("SvSelectMorado").style.display = "none";
          VariableColor = 5;
          break;
        case 6:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Morado'></i>Morado`;
          document.getElementById("SvSelectNegro").style.display = "flex";
          document.getElementById("SvSelectMorado").style.display = "none";
          VariableColor = 5;
          break;
      };
      document.getElementById('SvModalNP__d3_div2').style.display = 'none';
    };

    const SelectNegro = () =>{
      
      switch(VariableColor){
        case undefined:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Negro'></i>Negro`;
          document.getElementById("SvSelectNegro").style.display = "none";
          document.getElementById("SvSelectNegro").style.display = "flex";
          VariableColor = 6;
          break;
        case 1:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Negro'></i>Negro`;
          document.getElementById("SvSelectAzul").style.display = "flex";
          document.getElementById("SvSelectNegro").style.display = "none";
          VariableColor = 6;
          break;
        case 2:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Negro'></i>Negro`;
          document.getElementById("SvSelectRojo").style.display = "flex";
          document.getElementById("SvSelectNegro").style.display = "none";
          VariableColor = 6;
          break;
        case 3:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Negro'></i>Negro`;
          document.getElementById("SvSelectVerde").style.display = "flex";
          document.getElementById("SvSelectNegro").style.display = "none";
          VariableColor = 6;
          break;
        case 4:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Negro'></i>Negro`;
          document.getElementById("SvSelectAmarrillo").style.display = "flex";
          document.getElementById("SvSelectNegro").style.display = "none";
          VariableColor = 6;
          break;
        case 5:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Negro'></i>Negro`;
          document.getElementById("SvSelectMorado").style.display = "flex";
          document.getElementById("SvSelectNegro").style.display = "none";
          VariableColor = 6;
          break;
        case 6:
          SvModalNP__div1_Span1.innerHTML = `<i id ='Negro'></i>Negro`;
          document.getElementById("SvSelectNegro").style.display = "none";
          VariableColor = 6;
          break;
      };
      document.getElementById('SvModalNP__d3_div2').style.display = 'none';
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
                <input  type="text" name='Nombre'   id='Nombre' maxLength={120}/>
            </div>
            <div className='SvModalNP__d2_div2'>
            <span>0/120</span>
            </div>
        </div>
        <div className='SvModalNP__div3'>
            <div className='SvModalNP__d3_div1' >
            <h3>Color</h3>
            <SvBtnColors/>
            </div>



            <dialog className='SvModalNP__d3_div2' id='SvModalNP__d3_div2' open>

            <span className="SvSelectAzul" id="SvSelectAzul" onClick={SelectAzul} >
            <i id="SvAzul" ></i>
            Azul
        </span>

        <span className="SvSelectRojo" id="SvSelectRojo" onClick={SelectRojo} >
            <i id="SvRojo" ></i>
            Rojo
        </span>

        <span className="SvSelectVerde" id="SvSelectVerde" onClick={SelectVerde} >
            <i id="SvVerde" ></i>
            Verde
        </span>

        <span className="SvSelectAmarrillo" id="SvSelectAmarrillo" onClick={SelectAmarrillo} >
            <i id="SvAmarrillo" ></i>
            Amarillo
        </span>

        <span className="SvSelectMorado" id="SvSelectMorado" onClick={SelectMorado} >
            <i id="SvMorado" ></i>
           Morado
        </span>
        <span className="SvSelectNegro" id="SvSelectNegro" onClick={SelectNegro} >
            <i id="SvNegro" ></i>
           Negro
        </span>

            </dialog>
            
        </div>
        <div className='SvModalNP__div4'>
              <SvbtnCancelarModal/>
              <SvbtnAñadirPModal/>
            </div>
      </dialog>
    );
  };

