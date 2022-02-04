import React, { Component } from 'react';

class App extends Component {     //Creo un componente

    constructor(){
        super(); //Super es un metodo y hereda todas las funcionalidades que nos da el componente constructor
        this.state = {
            cedula: " ",
            nombre: " "
        };
        this.handleChange = this.handleChange.bind(this);
        this.addContractor = this.addContractor.bind(this);
    }

    addContractor(e){ //Evento del boton 
        fetch('/api/contactors', {    //fetch es un evento para poder enviar una petición http a mi servidor
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }) 
            .then(res => console.log(res))
            .catch(err => console.log(err));

        e.preventDefault(); //Evento para que no se reinicie la pagina cuando se adiere algo al formulario
    }

    handleChange(e){
        const { cedula, value } = e.target;
        this.setState({
            [cedula]: value
        })
    }

    render() {
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">CUENTAS DE COBRO CONTRATISTAS</a>
                    </div>
                </nav>
                {/* FORMULARIO */}
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addContractor}> 
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="cedula" onChange={this.handleChange} type="text" placeholder="Cedula"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="nombre" onChange={this.handleChange} type="text" placeholder="Nombre Contratista"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-light darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;