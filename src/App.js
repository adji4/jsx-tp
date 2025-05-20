import logo from './logo.svg';
import './App.css';

import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./nameame";
import Price from "./price";
import Description from "./description";
import Image from "./image";

const firstName = "Anta"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    <> 
     <Container className="my-5 d-flex justify-content-center"></Container>
     <Card style={{ width: "22rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <Card.Body className="text-center">
          <Image />
          <Card.Title><Name /></Card.Title>
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center w-100">
        {firstName ? (
          <>
            <h3>Bonjour, {firstName} !</h3>
            <img
              src="https://via.placeholder.com/100x100?text=👋"
              alt="Hello"
              className="mt-2"
            />
          </>
        ) : (
          <h3>Bonjour !</h3>
        )}
      </div>
       </> 
       
       );
  );
}

export default App;