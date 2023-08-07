// import { Route, Routes } from 'react-router';
import './App.scss';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';

function App() {

  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
