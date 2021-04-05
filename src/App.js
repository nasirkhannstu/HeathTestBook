import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TestForm from './components/TestForm';
import { allTest } from "./Tests";

// https://stackoverflow.com/questions/56273038/how-to-implement-multiple-checkbox-using-react-hook
// style={{backgroundImage: "url('img/kitV2.png')"}}
function App() {
  const [userData, setUserData] = useState({name : "",contact : "",address : "",tests: []});

  return (
    <div className="bg-light">
      <Header />
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card mt-3" style={{boxShadow: "0 0 4px"}}>
                <div className="card-body text-center">
                  <h1 className="card-title text-primary">Order a Diagonostic Test</h1>
                  <p className="text-muted">Please fill up the form fields.</p>
                </div>
              </div>

                <TestForm allTest={allTest} userData={userData} setUserData={setUserData} />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
