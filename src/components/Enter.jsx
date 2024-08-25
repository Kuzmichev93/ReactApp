import cssEnter from "../styles/Enter.module.css"
export const Enter = ({setFlagEnter})=>{
    return(
        <div className={cssEnter.enter}
             onClick={()=>setFlagEnter(false)}>
            <div className={cssEnter.enter_container}></div>
        </div>
    )
}