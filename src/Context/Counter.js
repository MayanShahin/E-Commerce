import { createContext, useState } from "react";



export let counterContext = createContext();

export default function CounterContextProvider(props){

  const [Counter,setCounter] = useState(10);
  function increase(){
    setCounter(Math.random)
  }

    return <counterContext.Provider value={{Counter,increase}}>
       {props.children} 
       </counterContext.Provider>
}
