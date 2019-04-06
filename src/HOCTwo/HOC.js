import React from 'react'
import {fetchNames} from '../util/fetch'
//HOC So IF every Page need a copy of these images I could simply pass them these images by Wrapping it and then using them via
//Props See HOCTWO index.js
export const SendData = InnerComponent => {
   return class SomeClass extends React.Component{
        state = {
            data: []
        };
        componentDidMount() {
          fetchNames()
                .then(result =>  this.setState({data: result}))
        }

        render() {
            return(
                <InnerComponent
                    {...this.props}
                    data={this.state.data}
                />
            )
        }
    }
};