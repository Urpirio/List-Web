import React, { Component } from 'react';
import SvmainProyects from './SvmainProyects';
import "./style/Svmain.less";

export default class SVmain extends Component {
  render() {
    return (
      <main className='Svmain'>
        <div className='Svmain__div1'>
            <span id='Svm__tareas'><i class="bi bi-plus"></i>Añadir tarea</span>
            <span id='Svm__Buscador'><i class="bi bi-search"></i>Buscador</span>
            <span id='Svm__BnEntrada'><i class="bi bi-inbox"></i>Bandeja de entrada</span>
        </div>
        <SvmainProyects/>
      </main>
    )
  }
}
