import React, { useState } from 'react';
import Maths from "./Maths";
import './App.css';

function App() {
  const [dVal , setVal] = useState();
  const[valuesInput, setValuesInput] = useState({
    a : 0,
    b : 0,
    c : 0,
    trigFunction : "",
  });
  const [output, setOutput] = useState();
 

  const selectOption = (e) => {
    setVal (parseInt(e.target.value));
  };

  
  let op;
switch(dVal){
    case 1 :  op = (
                <div>
                  <label>Value 1</label>
                  <input
                    type="number"
                    onChange={(e) => {setValuesInput({...valuesInput, a : e.target.value})}}
                  />
                  <br></br>
                  <label>Value 2</label>
                  <input
                    type="number"
                    onChange={(e) => {setValuesInput({...valuesInput, b : e.target.value})}}
                  />
                  <br></br>
                </div>
              );
              break;

    case 2 :   op = (
                  <div>
                  <label>Value 1</label>
                  <input
                    type="number"
                    onChange={(e) => {setValuesInput({...valuesInput, a : e.target.value})}}
                  />
                  <br></br>
                  <label>Value 2</label>
                  <input
                    type="number"
                    onChange={(e) => {setValuesInput({...valuesInput, b : e.target.value})}}
                  />
                  <br></br>
                  <label>Value 3</label>
                  <input
                    type="number"
                    onChange={(e) => {setValuesInput({...valuesInput, c : e.target.value})}}
                  />
                  <br></br>

                  </div>

                );
                break;

    case 3 :   op = (
                  <div>
                    <label>Value 1</label>
                    <input
                      type="number"
                      onChange={(e) => {setValuesInput({...valuesInput, a : e.target.value})}}
                    />
                    <br></br>
                    <label>Value 2</label>
                    <input
                      type="number"
                      onChange={(e) => {setValuesInput({...valuesInput, b : e.target.value})}}
                    />
                    <br></br>
                  </div>
                );
                break;

    case 4 :  op = (
                <div>
                  <label>Value 1</label>
                  <input
                    type="number"
                    onChange={(e) => {setValuesInput({...valuesInput, a : e.target.value})}}
                  />
                </div>
              );
              break;
      
    case 5 : op = (
                <div>
                  <label>Trigonometry function(sin, cos, tan)</label>
                  <input
                    type="text"
                    onChange={(e) => {setValuesInput({...valuesInput, trigFunction : e.target.value})}}
                  />
                  <br></br>
                  <label>Angle</label>
                  <input
                    type="number"
                    onChange={(e) => {setValuesInput({...valuesInput, a : e.target.value})}}
                  />
                  <br></br>
                </div>
              );
              break;

    default :op = (
        <p>Please select option between 1-5</p>
    );
    break;
  }

  let outputComponent;
  const calculate = () => {
    //sending props
    outputComponent = <Maths operation={dVal} values={valuesInput} />;
    setOutput(outputComponent);
  };


  return (
    <div className="App">
      <label>
        Select an operation
      </label>
      <select
        onChange={selectOption}
      >
        <option value="0">None</option>
        <option value="1">(a + b) squared</option>
        <option value="2">Quadratic equation</option>
        <option value="3">Nth root of a number</option>
        <option value="4">Factorial of a number</option>
        <option value="5">Trigonometry</option>
      </select>
      <div>{op}</div>

      {/* <button onClick = {() => {
        res = <Maths operation = {dVal} values = {valuesInput} />
      }}>Submit</button> */}

<button className="btn btn-primary" onClick={calculate}>
        Calculate
      </button>
    <div>{output}</div>
    </div>
  );
}

export default App;
