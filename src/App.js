import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
//se asigna el estado a repreater, para cuando cambie los valores    
    this.showInfo = this.showInfo.bind(this);
    this.state = {
//al estar en estado false, el checkbox esta deshabilitado desde el inicio, se habilita cuando se llama cambia el estado, para este caso en el showInfo
    show: false
   };
  }
//captura el evento 'e', para determinal si se muestra o no la información
  showInfo(e){
    this.setState({
      show: e.target.checked
    })
  }

  render() {
    return (
      <div className="wrapper">
        {/**en el checked se muestra el estado actual del checkbox,  y cuando hace el onChange es cuando cambia el estado */}
        <label><input type="checkbox" checked={this.state.show} onChange={this.showInfo}/>Mostrar información importante</label>
        {/**cuando cambia el estado, o se habilita el checkbox, se muestra la información del this.state.show en un nuevo parrafo*/}
        { this.state.show && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adaad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
      </div>
    );
  }
}

export default App;
