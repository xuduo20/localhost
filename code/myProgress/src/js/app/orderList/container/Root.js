import React from 'react'

let {Component} = React
export default class Root extends Component {
    render(){
        return (
            <div>
                This is a order List Page
                <p>{this.props.data}</p>
            </div>
        )
    }
}