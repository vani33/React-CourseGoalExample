import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';
import styles from './CourseInput.module.css'

//this component is for styled components to be used on the div with style form-control
// const FormControl = styled.div`

//       margin: 0.5rem 0;
      
//       & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//       }

//       & input {
//         display: block;
//         width: 100%;
//         border: 1px solid #ccc;
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//       }

//       & input:focus {
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//       }

//       &.invalid input {
//         border-color: red;
//         background-color: rgb(231, 184, 184);
//       }

//       &.invalid label {
//         color: red;
//       }

// `;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    //to reset the style(error) after entering the input
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (

      //using css modules (prefer this)
      <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']}  ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
      </form>

    //using dynamic inline styles

    // <form onSubmit={formSubmitHandler}>
    //   <div className="form-control">
    //     <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
    //     <input style={{backgroundColor: !isValid ? 'salmon' : 'transparent' , borderColor: !isValid ? 'red' : '#ccc'}} 
    //       type="text" onChange={goalInputChangeHandler} />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>


    //using css dynamic styles
      // <form onSubmit={formSubmitHandler}>
      // <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
      //   <label>Course Goal</label>
      //   <input type="text" onChange={goalInputChangeHandler} />
      // </div>
      // <Button type="submit">Add Goal</Button>
      // </form>

        //for styled components with component FormControl
        // <form onSubmit={formSubmitHandler}>
        // <FormControl className={!isValid && 'invalid}>
        //   <label>Course Goal</label>
        //   <input type="text" onChange={goalInputChangeHandler} />
        // </FormControl>
        // <Button type="submit">Add Goal</Button>
        // </form>
  );
};

export default CourseInput;
