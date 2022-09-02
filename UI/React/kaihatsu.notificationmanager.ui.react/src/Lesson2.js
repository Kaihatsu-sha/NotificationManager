import { useEffect, useState } from "react";

export function PropsComponent(props) {
    return (
      <div class="Component">
          <h4>Hello, </h4> <h2>{props.name}</h2>
      </div>
    );
};
  
export function Counter() {
    const [count, setCount] = useState(0);

    return (
    <div>
        <span class="counter">{count}</span>
        <button class="counter-button" onClick={()=>setCount(count=> count+1)}>Click!</button>
    </div>
        
    );
}; 

export function CounterAndEffect() {
    const [count, setCount] = useState(0);

    const effect = useEffect(()=>
    {
        const num = count/2;
        console.log(num);
        if(num > 5)
        {
            return()=>{console.log('unMount')};
        }
    },[count]);

    return (
    <div>
        <span class="counter">{count}</span>
        <button class="counter-button" onClick={()=>setCount(count=> count+1)}>Click!</button>
    </div>
        
    );
}; 