import React, { Component } from "react"


const Loadable = ({
    loader,
    loading: Loading
}) => {
    return class LoadableComponent extends Component {
        state = {
            LoadableComponent: null
        }

        render () {
            return (
                <Loading />
            )
        }
    }
}

export default Loadable