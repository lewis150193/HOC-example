import React from 'react'

//HOC So IF every Page need a copy of these images I could simply pass them these images by Wrapping it and then using them via
//Props See HOCTWO index.js
export const SendData = InnerComponent => {
    class SomeClass extends React.Component{
        state = {
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
                    data={this.state.data}
                />
            )
        }
    }
    return SomeClass;
};