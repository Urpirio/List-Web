import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style/Svheader.less";
import SmBtnCloseWindow from '../main/btns/SmBtnCloseWindow';

export default class SVheader extends Component {
  static propTypes = {

    identify: PropTypes,
    Photoperfil: PropTypes,
    descripcionIMG: PropTypes,
    Username: PropTypes,
    CerrarS: PropTypes.element,

  };


  render() {


    return (
        <header className='Svheader' id={this.props.identify}>
        <div className='Svheader__div1'>
        <div className='Svheader__sdiv1'>
            <img src={this.props.Photoperfil} alt={this.props.descripcionIMG} />
            <h3>{this.props.Username}</h3>
            <i class='bx bx-chevron-down'></i>
        </div>
        <div className='Svheader__sdiv2'>
            <button  id='btn1'><i class='bx bx-bell'></i></button>
            <SmBtnCloseWindow/>
        </div>
        </div>
        {this.props.CerrarS}
      </header>
    )
  }
};



