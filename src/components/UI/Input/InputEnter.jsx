import {useState} from "react";
import css from "../../../styles/ElementsEnter.module.css";
import {regularexpressions} from "../../utils/regularexpressions";
export const InputEnter = ({message,setValue})=>{
    const[flag,setFlag]=useState(true);

    return (
        <div className={css.input_container}>
            <input className={css.input_enter} type={"text"} placeholder={flag?message:''}
                   onClick={()=>setFlag(false)}
                   onMouseLeave={() => setFlag(true)}
                   onChange={(e)=>{
                       //regularexpressions(e.target.value,arg)
                       setValue(e.target.value)}}
            ></input>

        </div>
    )
}