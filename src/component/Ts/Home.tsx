import * as React from "react";

export interface HomeProps { compiler: string; framework: string; }


export class Hello extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                <h1>This is from {this.props.compiler} and {this.props.framework}!</h1>
            </div>
        )
    }
}


