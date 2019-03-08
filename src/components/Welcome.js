import React, { Component } from 'react';

export class Welcome extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    };

    render() {
        return (
            <React.Fragment>
                <h2>Sveiki atvykę</h2>
                <div className={"form"}>
                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.</div>
                    <div className={"form-footer"}>
                        <div
                            className={"button"}
                            onClick={this.continue}
                            >Toliau
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Welcome;
