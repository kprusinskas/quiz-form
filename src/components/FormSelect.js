import React, { Component } from 'react';

export class FormSelect extends Component {
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
                    <form >
                        <div>
                            <label htmlFor="select">Pasirinkite jums tinkamą paskolą</label>
                            <select name={"select"} onChange={handleChange('select')} value={values.select}>
                                <option value="nt" >Nekilnojamojo turto pirkimas ar statyba</option>
                                <option value="repairs">Būsto remontas</option>
                                <option value="car">Automobilio pirkimas</option>
                                <option value="other">Kiti poreikiai</option>
                            </select>
                        </div>
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


export default FormSelect;
