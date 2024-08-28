import {useState} from "react";
import css from "../../../styles/ElementsEnter.module.css";
export const InputEnter = ({message})=>{
    const[flag,setFlag]=useState(true);

    return (
        <div className={css.input_container}>
            <input className={css.input_enter} type={"text"} placeholder={flag?message:''}
                   onClick={()=>setFlag(false)}
                   onMouseLeave={() => setFlag(true)}
            ></input>

        </div>
    )
}