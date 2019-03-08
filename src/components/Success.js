import React, { Component } from 'react';

export class Success extends Component {
    reset = e => {
        e.preventDefault();
        this.props.resetForm();
    };


    render() {
        return (
            <React.Fragment>
                <h2>Duomenys išsiųsti</h2>
                <div className={"form"}>
                    Jūsų prašymas išsiųstas.
                    <div className={"form-footer"}>
                        <div
                            className={"button"}
                            onClick={this.reset}
                        >Iš naujo</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Success;
