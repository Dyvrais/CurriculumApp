import React from "react";

export function InputField(props){
    return <input 
                placeholder={props.placeholder} 
                onChange={props.handleChange}
                className={props.className}
                type={props.type}
                maxlength={props.maxlength}
                min={props.min}
                max={props.max}
                >
            </input>

}