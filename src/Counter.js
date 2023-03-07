import {useState} from "react"

// export default function Counter (props){
    
//         return(
//             <div>
//             <button className="btn">-</button>
//             <span> {props.initialCount} </span>
//             <button>+</button>
//           </div>
//         )
// }


// OR using object deconstruction you can write the code like this!
export default function Counter ({initialCount}){
    const [count, setCount] = useState(initialCount)
    
    return(
        <div>
        <button className="btn" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span> {count} </span>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    )
}