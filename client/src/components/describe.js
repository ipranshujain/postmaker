import React from 'react'
import parse from "html-react-parser";

export default function Describe(props){
    if(props.design==='code'&&props.description){
        return(
            <div className="description"><pre><code>{props.description.substring(0,700)}</code></pre></div>
        );
    } 
    else if(props.design!=='code'&&props.description){
        let arr= props.description.substring(0,700).split("<code>");
        if(arr.length===1||arr.length===2){
        return(
            <div className="description">{parse(props.description.substring(0,900))}</div>
        );
        }else{
            return(
            <div className="description">{parse(arr[0])}<pre><code>{arr[1]}</code></pre>{parse(arr[2])}</div>
            )
        }
    }
    else{
        return(<div></div>)
    }
}