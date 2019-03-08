import React, { Component } from 'react';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    };

    back = e => {
        e.preventDefault();
        this.props.previousPage();
    };

    render() {
        const { values: {firstName, lastName, email, phone, isClient, select, textArea, isTOS, formErrors} } = this.props;
        return (
            <React.Fragment>
                <h2>Duomenų patvirtinimas</h2>
                <div className={"form"}>
                    <ul>
                        <li>{ formErrors.firstName === "" && firstName !== null ? firstName : "Klaida: Įveskite vardą" }</li>
                        <li>{ formErrors.lastName === "" && lastName !== null ? lastName : "Klaida: Įveskite pvardę" }</li>
                        <li>{ formErrors.email === "" && email !== null ? email : "Klaida: Įveskite el. pašto adresą" }</li>
                        <li>{ formErrors.phone === "" && phone !== null ? phone : "Klaida: Įveskite tel. numerį" }</li>
                        <li>
                            {
                                isClient === "true"
                                ? "Esu Swedbank klientas"
                                : isClient === "false"
                                ? "Noriu tapti Swedbank klientu"
                                : null
                            }
                        </li>
                        <li>
                            {
                                select === "nt"
                                ? "Nekilnojamojo turto pirkimas ar statyba"
                                : select === "repairs"
                                ? "Būsto remontas"
                                : select === "car"
                                ? "Automobilio pirkimas"
                                : select === "other"
                                ? "Kiti poreikiai"
                                : null
                            }
                        </li>
                        <li>{ formErrors.textArea === "" && textArea.length > 11 ? textArea : "Klaida: Užpildykite lauką" }</li>
                        <li>{ isTOS === "true" ? "Su taisyklėmis sutinku" : "Klaida: Sutikite su naudojimosi taisyklėmis" }</li>
                    </ul>
                    <div className={"form-footer"}>
                        <div
                            className={"button"}
                            onClick={this.back}
                        >Atgal</div>
                        <div
                            className={"button"}
                            onClick={this.continue}
                        >Patvirtinti</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Confirm;
