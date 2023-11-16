import React, {useState} from 'react';

const State=()=>
{
    const[name,setName]=useState("Kaioken");
    const[count,setCount]=useState(0);
    const change=()=>{
        let val=count+1;
        setCount(val);
        if(count===3){
            if(name==="Kaioken"){
            setName("SuperSaiyan");
            }
            else{
                setName("Kaioken");
            }
            setCount(0);
        }
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={change}>Toggle</button>
        </div>
    );



}

export default State;