import React from 'react';
import './App.css';
import { Button, Card, Form, Modal } from 'react-bootstrap'
import Timeline from "../src/components/Timeline";
import Header from "./components/Header"
import Landing from './components/Landing';
function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
