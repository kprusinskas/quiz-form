import React, { Component } from 'react';

export class FormTOS extends Component {
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
                <h2>Naudojimosi salygos</h2>
                <div className={"form"}>
                    <form>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.swedbank.lt/static/pdf/naudojimosi_salygos.pdf"
                        >Skaitykite plačiau</a>
                        <div>
                            <label htmlFor="checkBox">Sutinku su naudojimos salygomis</label>
                            <input
                                id={"checkBox"}
                                name={"isTOS"}
                                type={"checkbox"}
                                onChange={handleChange('isTOS')}
                            />
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


export default FormTOS;
