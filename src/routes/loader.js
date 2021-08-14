import React from 'react'
import { withRouter, Route } from 'react-router'

const PendingRouteLoader = (props) => {
    return (<Route render={()=> props.children} />)
}

export default withRouter(PendingRouteLoader)