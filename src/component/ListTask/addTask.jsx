import classes from './ListTask.module.css'
import { Field, reduxForm } from 'redux-form'
import { required, emailValidation } from '../../validation/validation'
import React from 'react'

const renderFormAdd= ({
    label,
    value,
    input,
    type,
    meta: { touched, error }
}) => (
    <>
            <label className={classes.name_sms_label}>{label}</label>
            <input className={classes.name_sms}
            {...input} type={type} placeholder={label} {...value}/>
            {touched &&
                (error && <span className={classes.error}>{error}</span>)}
    </>
)

const renderTextarea = ({
    input,
    meta: { touched, error}
    }) => (
    <>
    <label className={classes.text_sms_label} htmlFor="">Текст Сообщения</label>
    <textarea {...input}   className={classes.text_sms} />
    {touched &&
                (error && <span className={classes.error_text}>{error}</span>)}
    </>
)

let FormAdd = (props) => {

    
    return (    <form  onSubmit={props.handleSubmit} className={classes.modal}>
                <div className={classes.block_name}>
                    <Field
                        label="Имя"
                        placeholder="Имя пользователя"
                        name="username"
                        type="text"
                        component={renderFormAdd}
                        validate={[required]}
                        initialValues={props.editingForm?props.itemsEditing.username:""}/>
                </div>
                <div className={classes.block_mail}>
                <Field
                        label="Маил"
                        placeholder="e-mail"
                        name="email"
                        type="text"
                        component={renderFormAdd}
                        validate={[required, emailValidation]}
                    />
                </div>
                <div className={classes.block_text}>
                <Field  
                        name="text"
                        component={renderTextarea}
                        validate={[required]}  
                    />
                </div>
                <div className={classes.block_elem_bt}>
                    <button className={classes.addItmes}>{props.editingForm?"Редактировать":"Отправить"}</button>
                    <button className={classes.cancel} onClick={() => props.getFormAdd(false)}>Отменить</button>
                </div>
            </form>
    )
}


export default reduxForm({ form: 'addTasKForm' })(FormAdd)