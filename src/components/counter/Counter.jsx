import { useState } from "react";
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [count,setCount] = useState(0); 

    function incrementCounterByParentFunction(by) {
        setCount(count+by); 
    }

    function decrementCounterByParentFunction(by) {
        setCount(count-by); 
    }

    function resetCounter() {
        setCount(0); 
    }
    
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterByParentFunction} decrementMethod={decrementCounterByParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterByParentFunction} decrementMethod={decrementCounterByParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterByParentFunction} decrementMethod={decrementCounterByParentFunction}/>
            <button className="resetButton" onClick={resetCounter}>Reset</button>
        </>
    ); 
}

