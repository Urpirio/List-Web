import React, { Component ,  } from 'react';
import PropTypes from 'prop-types';

export default class SvSelect1 extends Component {
  render() {
    return (
        
        <span className={this.props.className} onClick={this.props.Clickfun} >
            <i id={this.props.Svcolor} ></i>
            {this.props.color}
        </span>
    )
  }
}
