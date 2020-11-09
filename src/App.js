import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/AutoComponents';
import './App.css';
import Auto from './components/AutoComponents';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Stories With A Voice</NavbarBrand>
                </div>
                </Navbar>
            <Directory />
            </div>
        );
    }
}

export default App;
