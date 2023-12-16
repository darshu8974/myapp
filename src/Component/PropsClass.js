import React ,{ Component } from "react"
export default class PropsClass extends Component
{
    render()
    {
        return(
            <div>
                <h1>My place is  {this.props.place}</h1>
            </div>
        )
    }
} 