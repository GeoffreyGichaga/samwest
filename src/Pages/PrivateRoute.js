import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../Auth'

const PrivateRoute = ({pages}) => {
    const {user} = useContext(AuthContext)
  return (
    <Route>
        

    </Route>
  )
}

export default PrivateRoute