import css from "../../styles/Header.module.css"
import cssApp from "../../styles/App.module.css"
import {useEffect, useState} from "react";
import {Enter} from "../Enter";
import {HeaderBottom} from "./HeaderBottom";
export const Header = () => {

    function setBorder(event,classname){
        const element = document.getElementsByClassName(classname);

        if(event.type == "mouseenter"){
            element[0].style.border = "1px solid rgb(255,255,255)";
            return;
        }
        element[0].style.border = "1px solid rgb(255,255,255,0.8)";

    }


    useEffect(()=>{
        setOpacity()
    },[])

    function setOpacity(){
        const element_container = document.querySelectorAll("."+css.icon_container);
        const element_icon_name = document.querySelectorAll("."+css.icon_name);
        for(let k =0;k<element_container.length;k++){
            element_container[k].addEventListener("mouseenter",(e)=>{
                element_icon_name[k].style.opacity = "1";
            })
            element_container[k].addEventListener("mouseleave",(e)=>{
                element_icon_name[k].style.opacity = "0.8";
            })
        }
    }

    const addcss = [css.icon_container,css.marg];
    const [value, setValue] = useState('')
    const [flag,setFlag] = useState(false);
    const [flagEnter,setFlagEnter] = useState(false);
    const inputDelele = [css.input_delete]

    if(flag){
        inputDelele.push(css.input_dispaly)
    }

    return(
        <header className={css.header}>
            <div className={cssApp.conteiner}>
                <div className={css.top}></div>
                <HeaderBottom setFlagEnter={setFlagEnter}
                              value={value}
                              setValue={setValue}
                              setFlag={setFlag}
                              setBorder={setBorder}
                              addcss={addcss}
                              inputDelele={inputDelele}
                />
            </div>
            {flagEnter && <Enter setFlagEnter={setFlagEnter}/>}
        </header>

    )
}