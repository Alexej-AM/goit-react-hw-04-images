import PropTypes from 'prop-types';
import React from 'react'
import {ButtonLoad} from './ButtonStyled'




export const Button = ({onClick}) => {
  return (
    <ButtonLoad onClick={() => onClick()}>Load more</ButtonLoad>
  )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };


  // import React, { Component } from 'react'

// export class Button extends Component {
//   render() {
//     return (
//       <div>
//         <button>Load more</button>
//       </div>
//     )
//   }
// }