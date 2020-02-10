import React from 'react'
import LoginForm from '../AU/LoginForm'
import { connect } from 'react-redux'
import { Autorization } from '../../redux/AU'

class LoginClass extends React.Component {
    render() {
        return (
            <LoginForm {...this.props}
            />
        )
    }
}

let mapstate = (state) => {
    return { ...state.login
   }
}

export default connect(mapstate, {
    Autorization
})(LoginClass)