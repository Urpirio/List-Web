import React, { Component, createElement } from 'react';
import "./style/Svmainproyects.less";

export default class SvmainProyects extends Component {
  render() {
    return (
      <div className='SvmainProyects'>
        <div className='SvmainProyects__div1'>
            <h3>Mis proyectos</h3>
            <button><i class="bi bi-plus"></i></button>
            <button><i class='bx bx-chevron-down'></i></button>
        </div>
        <div className='SvmainProyectsdiv2'>
            
        </div>
      </div>
    )
  }
}
