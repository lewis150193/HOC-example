import React from 'react'
import {SendData} from "./HOC";

class BoostedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {this.props.hello}
                {this.props.world}
                {this.props.data.map( p => (
                    <p>{p.name}</p>
                ))}

            </div>
        )
    }
}

export default SendData(BoostedComponent)