import React, { Component } from 'react';
import './App.css';
import { UserForm } from "./components/UserForm"

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Išsirinkite Jums tinkamiausią paskolą</h1>
        <div className={"form-wrapper"}>
          <div className={"form-frame"}>
            <UserForm />
          </div>
        </div>

      </div>
    );
  }
}


export default App;
