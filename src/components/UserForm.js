import React, { Component } from 'react';
import Welcome from "./Welcome"
import FormInputs from "./FormInputs"
import FormRadio from "./FormRadio"
import FormSelect from "./FormSelect"
import FormTextArea from "./FormTextArea"
import FormTOS from "./FormTOS"
import Confirm from "./Confirm"
import Success from "./Success"

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach( val => {
        val.length > 0 && (valid = false)
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
};

export class UserForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            isClient: "true",
            select: "repairs",
            textArea: "",
            isTOS: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                isClient: "",
                select: "",
                textArea: "",
                isTOS: "",
            }
        };
    }

    nextPage = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    previousPage = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    resetForm = () => {
        this.setState({
            step: 1,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isClient: "true",
            select: "repairs",
            textArea: "repair",
            isTOS: null
        });
    };

    handleValidation = e => {
        e.preventDefault()

        if(formValid(this.state)) {
            console.log(`
            --CHECKING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Phone: ${this.state.phone}
            `)
        } else {
            console.error(`FORM INVALID - DISPLAY ERROR MESSAGE`);
        }
    };

    handleChange = input => e => {
        // this.setState({[input]: e.target.value });

        e.preventDefault()
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case 'firstName':
                formErrors.firstName =
                    value.length < 3
                    ? "minimum 3 characters required"
                    : "";
                break;
            case 'lastName':
                formErrors.lastName =
                    value.length < 3
                    ? "minimum 3 characters required"
                    : "";

                break;
            case 'email':
                formErrors.email =
                    emailRegex.test(value)
                    ? ""
                    : "invald email address";
                break;
            case 'phone':
                formErrors.phone = value.length < 9
                    ? "minimum 9 characters required"
                    : "";
                break;
            case 'textArea':
                formErrors.textArea = value.length < 12
                    ? "minimum 12 characters required"
                    : "";
                break;
            default:
                break;
        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state))
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, phone, isClient, select, textArea, isTOS, formErrors } = this.state;
        const values = { firstName, lastName, email, phone, isClient, select, textArea, isTOS, formErrors };

        switch(step) {
            case 1:
                return (
                    <Welcome
                        nextPage={this.nextPage}
                    />
                );
            case 2:
                return (
                    <FormInputs
                        nextPage={this.nextPage}
                        handleChange={this.handleChange}
                        handleValidation={this.handleValidation}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormRadio
                        previousPage={this.previousPage}
                        nextPage={this.nextPage}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (

                    <FormSelect
                        previousPage={this.previousPage}
                        nextPage={this.nextPage}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 5:
                return (
                    <FormTextArea
                        previousPage={this.previousPage}
                        nextPage={this.nextPage}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 6:
                return (
                    <FormTOS
                        previousPage={this.previousPage}
                        nextPage={this.nextPage}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 7:
                return (
                    <Confirm
                        previousPage={this.previousPage}
                        nextPage={this.nextPage}
                        values={values}
                    />
                )
            case 8:
                return (
                    <Success
                        resetForm={this.resetForm}
                    />
                )
            default:
                break;

        }

        return (
            <div>

            </div>
        );
    }
}


export default UserForm;
