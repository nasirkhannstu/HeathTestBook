import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const tests = [
  {name:"A Test test", price:200,des:"A test description for test purpose.", tag:"ECG"},
  {name:"Another Test", price:300,des:"Another test long description Another test long description Another test long description Another test long description.", tag:"CBC"},
  {name:"Another One Test", price:400,des:"Another one test description", tag:"ESR"},
  {name:"Another JSR One Test", price:1000,des:"Another one test description JSR", tag:"JSR"}
]

// https://stackoverflow.com/questions/56273038/how-to-implement-multiple-checkbox-using-react-hook
// style={{backgroundImage: "url('img/kitV2.png')"}}
function App() {
  let [formData, setFormData] = useState({
    name : "",
    contact : "",
    address : "",
    tests: []
  });
  const [checkedItems, setCheckedItems] = useState([]);
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChangeTest = e => {
    setCheckedItems([...checkedItems, e.target.name])
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      formData.tests = checkedItems;
      console.log(e.target)
      
    }catch(err){
      console.log(err)
    }

  }

  return (
    <div className="bg-light">
      <Header />
      <div className="container-fluid">
        <form action=""  onSubmit={(e)=>handleSubmit(e)}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-3" style={{boxShadow: "0 0 4px"}}>
            <div className="card-body text-center">
              <h1 className="card-title text-primary">Order a Diagonostic Test</h1>
              <p className="text-muted">Please fill up the form fields.</p>
            </div>
          </div>
          <div className="card mt-3" style={{boxShadow: "0 0 2px"}}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name" className="text-primary fs-4 fw6">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="card mt-3" style={{boxShadow: "0 0 2px"}}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="number" className="text-primary fs-4 fw6">Contact Number</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your contact number"
                  name="contact"
                  value={formData.contact}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="card mt-3" style={{boxShadow: "0 0 2px"}}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="number" className="text-primary fs-4 fw6">Address</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your full address"
                  name="address"
                  value={formData.address}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="card mt-3" style={{boxShadow: "0 0 2px"}}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="number" className="text-primary fs-4 fw6 mb-3">Select Test from this list</label>
              </div>
              <div className="list-group">
                {tests && tests.map(test => (
                  <label className="list-group-item list-group-item-action" key={test.name} aria-current="true" style={{cursor:"pointer"}}>
                  <div className="d-flex w-100 justify-content-start">
                    <input 
                      className="form-check-input me-1 align-self-center" 
                      type="checkbox" 
                      name={test.name}
                      value={test.name}
                      onChange={e => onChangeTest(e)}
                    />
                    <div className="w-100 p-2">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{test.name}</h5>
                        <button className="btn btn-primary btn-sm">{test.tag}</button>
                      </div>
                      <h6 className="text-warning">Price: <strong>{test.price}</strong></h6>
                      <p className="mb-1">{test.des}</p>
                    </div>
                  </div>
                </label>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="card-body">
              <input type="submit" value="Submit" className="btn btn-primary w-100"  style={{boxShadow: "0 0 2px"}} />
            </div>
          </div>
        </div>
      </div>
      </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
