import React, { useContext } from 'react'
import CentralContext from '../tool/central'
import { withRouter, Route } from 'react-router'

const PendingRouteLoader = (props) => {
    const context = useContext(CentralContext)
    console.log(context);
    console.log(props)
    return (<Route render={()=> props.children} />)
}

export default withRouter(PendingRouteLoader)