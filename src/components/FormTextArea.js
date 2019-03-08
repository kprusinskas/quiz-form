import React, { Component } from 'react';

export class FormTextArea extends Component {
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
                    <textarea
                        name="textArea"
                        placeholder={"Motyvacinis laiškas"}
                        onChange={handleChange('textArea')}
                        value={values.textArea !== "" ? values.textArea : ""}
                    />
                    {values.formErrors.textArea.length > 0 && (
                        <span className={"errorMessage"}>{values.formErrors.textArea}</span>
                    )}
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


export default FormTextArea;
