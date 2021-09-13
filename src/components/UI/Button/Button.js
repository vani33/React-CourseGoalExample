 import React from 'react';
//  import './Button.css';

import styles from './Button.module.css'//used for css modules, we can give any name in place of styles.
//css modules are good to use because it maintains a class level styles. we can create styles for components.

// import styled from 'styled-components';

// const Button = styled.Button`

//   // inside this back ticks we can include the styles for the button, these styles will apply only to 
//   // this button.
  
      //  width:100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
  
      //to change the button width according to the screen size.
        // @media(min-width: 768px){
        //   width: auto;
        // }
//   //have to use '&' for the pseudo styles for the buttons
//   &:focus {
//     outline: none;
//   }
  
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
  

// `;

 const Button = props => {
   return (
     //for using css modules
     <button type={props.type} className={styles.button} onClick={props.onClick}>
       {props.children}
     </button>

      // <button type={props.type} className="button" onClick={props.onClick}>
      // {props.children}
      // </button>
   );
 };

export default Button;
