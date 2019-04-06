import React from 'react'
import {SendData} from "./HOC";

const BoostedComponent = (props) => (
            <div>
                {props.data.map( p => (
                    <p>{p.name}</p>
                ))}

            </div>
        );
export default SendData(BoostedComponent);