import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles/index";
import Card from '@material-ui/core/Card';
import Errors from './Errors';
import {Field, reduxForm} from 'redux-form';
import styles from "../Login-Redux/style";

this.renderField = ({input, label, type, value}) => (
    <div>
        <div>
            <TextField
                {...input}
                id={label}
                label={label}
                type={type}
                value={value}
                placeholder={label}
            /><br/>
        </div>
    </div>
);


let LoginReduxForm = props => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Card className={props.classes.card}>
                <h1>
                    Login Redux-form
                </h1>
                {
                    props.formValid !== true && <Card className={props.classes.inputGroup}>
                        Errors
                        <Errors formErrors={props.formErrors}/>
                    </Card>
                }
                <div>
                    <Field name="email" component={this.renderField} label="email" onChange={props.handleUserInput}
                           values={props.email} type="email"/>
                </div>
                <div>
                    <Field name="password" component={this.renderField} label="password"
                           onChange={props.handleUserInput} values={props.password} type="password"/>
                </div>
                <Button variant="raised" color="secondary" disabled={!props.formValid}
                        type="submit" className={props.classes.button}>Login
                </Button>
                <Card className={props.classes.inputGroup}>
                    <TextField
                        type="text"
                        className={props.classes.textField}
                        value={props.email}
                    /><br/>
                    <TextField
                        type="text"
                        className={props.classes.textField}
                        value={props.password}
                    />
                </Card>
            </Card>
        </form>
    )
}

LoginReduxForm = reduxForm({
    form: 'login'
})(LoginReduxForm);


export default withStyles(styles)(LoginReduxForm);