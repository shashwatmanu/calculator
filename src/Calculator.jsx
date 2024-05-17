import React from 'react'
import "./Calc.css"
import { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState()
    const [shouldShow, setShouldShow] = useState(false);
    const [error, setError] = useState(false);


    const handleClick = (e) =>{
        setInput(prevInput=> prevInput+e.target.value)
    }
    const handleClear = () =>{
        setInput("")
        setShouldShow(false);
    }
    const handleEquate = () =>{
        if(input==="="){
            setError(true);
        }
       setResult(eval(input));
       setShouldShow(true);
    }



  return (
    <>
    <h2>React Calculator</h2>
    <input type='text' value={input}/>
    {shouldShow?(<p>{result}</p>):""}
    {error?(<div>Error</div>):""}
    <div style={{display:'grid', gridTemplateColumns:'40px 40px 40px 40px'}}>
        <button className='item' value="7" onClick={handleClick}>7</button>
        <button className='item' value="8" onClick={handleClick}>8</button>
        <button className='item' value="9" onClick={handleClick}>9</button>
        <button className='item' value="+" onClick={handleClick}>+</button>
        <button className='item' value="4" onClick={handleClick}>4</button>
        <button className='item' value="5" onClick={handleClick}>5</button>
        <button className='item' value="6" onClick={handleClick}>6</button>
        <button className='item' value="-" onClick={handleClick}>-</button>
        <button className='item' value="1" onClick={handleClick}>1</button>
        <button className='item' value="2" onClick={handleClick}>2</button>
        <button className='item' value="3" onClick={handleClick}>3</button>
        <button className='item' value="*" onClick={handleClick}>*</button>
        <button className='item' value=""  onClick={handleClear}>C</button>
        <button className='item' value="0" onClick={handleClick}>0</button>
        <button className='item' value="=" onClick={handleEquate}>=</button>
        <button className='item' value="/" onClick={handleClick}>/</button>
    </div>
    
    </>
  )
}

export default Calculator;