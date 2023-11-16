const{useState} =require("react");
function StateandProps()
{
    const[name,setName]=useState("Helvin rosen");
    const[num,setNum]=useState(0);
    const[student,setStudent]=useState({name:"Helvin Rosen",age:18});
    const nameHandler=()=>
    {
        setName("John");
    };
    const numHandler=()=>
    {
        let value = num;
        setNum(++value);
    };
    const numHandle=()=>
    {
        let value = num;
        setNum(--value);
    };
    return(
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>Number is {num}</h2>
        <h2>
                Student name is {student.name} and age is {student.age};
            </h2>
            <button onClick={nameHandler}>Change name</button>
            <button onCLick={numHandler}>Increment Number</button>
            <button onCLick={numHandle}>Decrement Number</button>
        </div>
    );
}
export default StateandProps;