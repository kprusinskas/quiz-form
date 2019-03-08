import React, { Component } from 'react';

export class FormInputs extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    };
    validation = e => {
        e.preventDefault();
        this.props.handleValidation();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <h2>Įveskite kontaktinius dumenys</h2>
                <div>
                    <form>
                        <div className={"form"}>
                            <label htmlFor="firstName">Vardas</label>
                            <input
                                type={"text"}
                                name={"firstName"}
                                className={values.formErrors.firstName.length > 0 ? "error" : null}
                                placeholder={"Įveskite savo vardą"}
                                defaultValue={values.firstName}
                                noValidate
                                onChange={handleChange('firstName')}
                            />
                            {values.formErrors.firstName.length > 0 && (
                                <span className={"errorMessage"}>{values.formErrors.firstName}</span>
                            )}
                        </div>
                        <div className={"form"}>
                            <label htmlFor="lastName">Pavardė</label>
                            <input
                                type={"text"}
                                name={"lastName"}
                                className={values.formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Įveskite savo pavardę"
                                defaultValue={values.lastName}
                                noValidate
                                onChange={handleChange('lastName')}
                            />
                            {values.formErrors.lastName.length > 0 && (
                                <span className={"errorMessage"}>{values.formErrors.lastName}</span>
                            )}
                        </div>
                        <div className={"form"}>
                            <label htmlFor="email">El. Paštas</label>
                            <input
                                type={"email"}
                                name={"email"}
                                className={values.formErrors.email.length > 0 ? "error" : null}
                                placeholder="Įveskite jūsų el. pašto adresą"
                                noValidate
                                defaultValue={values.email}
                                onChange={handleChange('email')}
                            />
                            {values.formErrors.email.length > 0 && (
                                <span className={"errorMessage"}>{values.formErrors.email}</span>
                            )}
                        </div>
                        <div className={"form"}>
                            <label htmlFor="phone">Tel. Numeris</label>
                            <input
                                type={"text"}
                                name={"phone"}
                                className={values.formErrors.phone.length > 0 ? "error" : null}
                                placeholder="Įveskite savo telefono numerį"
                                noValidate
                                defaultValue={values.phone}
                                onChange={handleChange('phone')}
                            />
                            {values.formErrors.phone.length > 0 && (
                                <span className={"errorMessage"}>{values.formErrors.phone}</span>
                            )}
                        </div>
                    </form>
                    <div className={"form-footer"}>
                        <div
                            className={"button"}
                            onClick={this.continue}
                        >Toliau</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default FormInputs;
