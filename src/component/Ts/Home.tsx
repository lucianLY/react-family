import * as React from "react";

export interface Props { 
    name: string;
    level: number;
 }


export class Home extends React.Component<Props, {}> {

    getExclamationMarks (numChars: number){
        
        return Array( numChars + 1).join('*')
    }

    render() {
        const { name, level} = this.props

        return (
            <div>
                <h1>This is from {name} and { this.getExclamationMarks(level) }</h1>
            </div>
        )
    }
}