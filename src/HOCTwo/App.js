import React from 'react'
import {SendData} from "./HOC";

export const BoostedComponent = (props) => (
            <div>
                {props.hello}
                {props.world}
                {props.data.map( p => (
                    <p>{p.name}</p>
                ))}

            </div>
        );



export default SendData(BoostedComponent)