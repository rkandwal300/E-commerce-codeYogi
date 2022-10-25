import react, { useState } from "react";




const App=()=> {

  const state=useState;
// console.log(state);


// let count=0;
 
const [count,setCount]=useState(0);

const IncNum=() => {
  setCount(count+1);
  // console.log('clicked' + count++);
};

  return  ( 
    <>



    <div className="m-[20%] ">
          <h1 className=" text-4xl font-bold ml-[60px]" >{count}</h1>
          <button className="w-[150px] h-[60px] rounded-xl bg-blue-800 text-slate-100 font-semibold text-xl"   onClick={IncNum} >Click Me</button>
          </div>
    </>
  );
  
}

export default App;
