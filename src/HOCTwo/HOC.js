import React from 'react'

//HOC So IF every Page need a copy of these images I could simply pass them these images by Wrapping it and then using them via
//Props See HOCTWO index.js
export const SendData = InnerComponent => {
    class SomeClass extends React.Component{
        state = {
            value: 'Hello',
            value2: 'World',
            data: []
        };

        componentDidMount() {
            fetch('https://rickandmortyapi.com/api/character')
                .then(character => character.json())
                .then(c => c.results)
                .then(result =>  this.setState({data: result}))
        }

        render() {
            return(
                <InnerComponent
                    {...this.props}
                    hello={this.state.value}
                    world={this.state.value2}
                    data={this.state.data}
                />
            )
        }
    }
    return SomeClass;
};