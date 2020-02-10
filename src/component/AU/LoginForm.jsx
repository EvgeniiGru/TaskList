import React from 'react'
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../validation/validation'

const renderField = ({
    label,
    input,
    type,
    meta: { touched, error }
}) => (
    <>
        <div className={classes.value}>
            <input className={touched && error?classes.login_err_value:classes.login_value}
            {...input} type={type} placeholder={label} />
            {touched &&
                (error && <span className={classes.error}>{error}</span>)}
        </div>
       </>
    )

const LoginForm = (props) => {

    return <form className={classes.form} onSubmit={props.handleSubmit} action="">
        <div className = {classes.login}>
            <Field
                label="Login"
                placeholder="Login"
                name="login"
                type="text"
                component={renderField}
                validate={[required]}
            />
        </div>
        <div className = {classes.password}>
            <Field
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                component={renderField}
                validate={[required]} 
            />
        </div>
        <div className={classes.bt_panel}>
            <button className={classes.bt_login}>login</button>
        </div>
    </form>

}

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formDate) => {
        props.Autorization(formDate);
    }
    return (
        <div className={classes.body}>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
}


export default Login;