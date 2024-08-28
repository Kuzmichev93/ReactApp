import css from "../../styles/ElementsEnter.module.css";
import {InputEnter} from "../UI/Input/InputEnter";
import {useState} from "react";

export const ElementsEnter = ()=>{

    return (
        <div className={css.container_elements_enter}>
            <div className={css.container}>

                    <InputEnter message={"Email*"}/>

            </div>
            <div className={css.container}>

                    <InputEnter message={"Пароль*"} />

            </div>
            <div className={css.container}></div>
        </div>
    )
}