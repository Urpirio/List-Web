import React, { Component } from 'react';
import "./style/Smain.less";
import SmainText from './SmainText';

export default class Smain extends Component {
  render() {

    

    return (
      <div className='Smain__div1' id='Smain__div1'>
        <div className='SM_div1_div1'> 
            <h1>Bandeja de entrada</h1>
            <span><i class="bi bi-plus"></i>Añadir tarea</span>
        </div>
        <div className='listarea'>

        </div>
       <SmainText/>
      </div>
    )
  }
}
