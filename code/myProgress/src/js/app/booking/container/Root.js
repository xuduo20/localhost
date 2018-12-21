import React from 'react'

let {Component} = React
export default class Root extends Component {
    render(){
        return (
            <div>
                This is a booking page
                <p>{this.props.data}</p>
            </div>
        )
    }
}