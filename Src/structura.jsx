import React, { Component } from 'react';
import SVheader from './components/Sventana/SVheader';
import SvmainProyects from './components/Sventana/SvmainProyects';
import SvheaderData from './components/Sventana/Data/SvheaderData';

export default class Structura extends Component {
  render() {
    
    const startlist = SvheaderData.map(
        SvhD =>{

            const CerrarE = (props) =>{

                return(
                    <div className='Svheader__div2'>
                        <span>
                            <h4>{props.Username}</h4>
                        </span>
                        <span>
                        <i class='bx bx-log-out'></i>Cerrar sesion
                        </span>
                   </div>
                )
            };

            const CerrarElist = SvheaderData.map(
                CE =>{
                    return(
                        <CerrarE Username = {CE.Username}/>
                    )
                }
            );

            return(
                <SVheader Photoperfil = {SvhD.Photoperfil} descripcionIMG = {SvhD.descripcionIMG}
                Username = {SvhD.Username} CerrarS = {CerrarElist}
                />
            )
        }
    );

    return (
      <div>
        <section className='Sventana' >
            {startlist}
            <SvmainProyects/>
        </section>
        <section className='Smain'>
            
        </section>
      </div>
    )
  }
}
