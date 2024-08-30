import cssEnter from "../../styles/Enter.module.css"
import {useState} from "react";
import {ElementsEnter} from "./ElementsEnter";
import {ElementsRegistration} from "./ElementsRegistration";
export const Enter = ({setFlagEnter})=>{

   let colorEnter = [cssEnter.element,cssEnter.color_element]
   const[elementFlag, setElementFlag] = useState(true)

    return(
        <div className={cssEnter.enter}
             onClick={(e)=>{
                 setFlagEnter(false)}}>
            <div className={cssEnter.enter_container} onClick={(e)=>{e.stopPropagation()}}>
                <div className={cssEnter.icon_closes}
                     onClick={(e)=>{
                         setFlagEnter(false)}}></div>
                <div className={cssEnter.content}>
                    <div className={cssEnter.enter_registration}>
                        <div className={elementFlag?colorEnter.join(" "):cssEnter.element}
                        onClick={() => setElementFlag(true)}>Вход</div>
                        <div style={{fontSize:32,marginLeft:5,marginRight:5}}>/</div>
                        <div className={elementFlag?cssEnter.element:colorEnter.join(" ")}
                             onClick={()=>setElementFlag(false)}>Регистрация</div>
                    </div>
                    {elementFlag?<ElementsEnter setFlagEnter={setFlagEnter}/>:<ElementsRegistration setFlagEnter={setFlagEnter}/>}
                </div>
            </div>
        </div>
    )
}