import React from "react";
import App from "./App";

function Maths(props) {

    const choice = props.operation;
    let a = parseInt(props.values.a);
    let b = parseInt(props.values.b);
    let c = parseInt(props.values.c);
    let trigoF = props.values.trigFunction;

    function addAndSquare(a, b) {
        return (a+b) * (a+b);
      }
      
     
    function findRoots(a, b, c) {
        const D = Math.pow(b, 2) - 4 * a * c;
        if (D < 0) {
          return "Imaginary Roots";
        }
        const rootD = Math.sqrt(D);
        let root1 = (-b + rootD) / (2 * a);
        let root2 = (-b - rootD) / (2 * a);
        return root1 + ", " + root2;
      }
      
    function NthRoot(N, num) {
        return Math.pow(num, 1 / N) + " ~=" + Math.round(Math.pow(num, 1 / N));
      }
      
    function factorial(a) {
        if (a === 0) {
          return 1;
        }
        return a * factorial(a - 1);
      }
      
    function trigo(a, trig) {
        if(trig === "sin"){
            return Math.sin((a* Math.PI) / 180);
        }else if(trig === "cos"){
            return Math.cos((a* Math.PI) / 180);
        }else if(trig === "tan"){
            return Math.tan((a* Math.PI) / 180);
        }
      }


    function renderingOutput() {
        if(choice === 1){
            return addAndSquare(a, b);
        }else if(choice === 2){
            return findRoots(a,b,c);
        }else if(choice === 3){
            return NthRoot(a,b);
        }else if(choice === 4){
            return factorial(a);
        }else if(choice === 5){
            return trigo(a, trigoF);
        }
    }

    return(
        <div>
            <h1>{renderingOutput()}</h1>
        </div>
    ); 
    }

export default Maths;