import React, { Component } from 'react';

export class FormRadio extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    };

    back = e => {
        e.preventDefault();
        this.props.previousPage();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <h2>Ar esate Swedbank klientas?</h2>
                <div className={"form"}>
                    <form onChange={handleChange('isClient')}>
                        <div>
                            <label htmlFor="radioTrue">Taip</label>
                            <input
                                type={"radio"}
                                name={"isClient"}
                                value={"true"}
                                defaultChecked={values.isClient === "true" }
                            />
                        </div>
                        <div>
                            <label htmlFor="radioFalse">Ne</label>
                            <input
                                type={"radio"}
                                name={"isClient"}
                                value={"false"}
                                defaultChecked={values.isClient === "false" }
                            />
                        </div>
                        {values.isClient}
                    </form>
                    <div className={"form-footer"}>
                        <div
                            className={"button"}
                            onClick={this.back}
                        >Atgal</div>
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


export default FormRadio;
