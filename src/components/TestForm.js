import React, { useState } from 'react';
import ReviewTest from './ReviewTest';
import useInView from "react-cool-inview";

const TestForm = ({allTest, userData, setUserData}) => {
      const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });
      const [useTest, setUsrTest] = useState([]);
    
      const onChangeTest = e => {
        if((userData.tests).includes(e.target.value)){
            userData.tests = userData.tests.filter(test => test !== e.target.value)
            userData.total -= JSON.parse(e.target.value).price
            setUserData(userData)
        }else{
            userData.total = userData.total ? userData.total:0;
            userData.tests = [...userData.tests, e.target.value];
            userData.total += JSON.parse(e.target.value).price
            setUserData(userData)
        }
        setUsrTest([...useTest, userData])
      }

      const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            setUserData(userData)
        }catch(err){
            console.log(err)
        }
      }

      const { observe } = useInView({
        threshold: 0.500, // Default is 0
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
          // Triggered when the target enters the viewport
          if(document.getElementById("floatingPriceCard")){
            document.getElementById("floatingPriceCard").style.display = "none";
          }
        },
        onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
          // Triggered when the target leaves the viewport
          if(document.getElementById("floatingPriceCard")){
            document.getElementById("floatingPriceCard").style.display = "block";
          }
        },
        // More useful options...
      });
    
    return (
        <div className="blockCom" style={{position:"relative"}}>
            {userData.tests.length > 0 ? (
            <div className="card p-2 floatingTest list-group" id="floatingPriceCard">
                  <h4>Total Tests Selected:</h4>
                  <ul>
                    {userData.tests.map(tst => (
                      <li key={tst}>{`${JSON.parse(tst).name} (${JSON.parse(tst).price})`}</li>
                    ))}
                  </ul>
                  <h4 className="text-warning">{ `Total: ${userData.total}` }</h4>
            </div>
            ):''}
            <form action=""  onSubmit={(e)=>handleSubmit(e)}>
              <div className="card mt-3" style={{boxShadow: "0 0 2px"}}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="name" className="text-primary fs-4 fw6">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Your Full Name"
                      name="name"
                      value={userData.name}
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
                      value={userData.contact}
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
                      value={userData.address}
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
                    {allTest && userData.tests && allTest.map(test => (
                      <label className="list-group-item list-group-item-action" key={test.name} aria-current="true" style={{cursor:"pointer"}}>
                      <div className="d-flex w-100 justify-content-start">
                        <input 
                          className="form-check-input me-1 align-self-center" 
                          type="checkbox" 
                          name={test.name}
                          value={JSON.stringify(test)}
                          onChange={e => onChangeTest(e)}
                          defaultChecked={userData.tests.includes(JSON.stringify(test)) ? true:false}
                        />
                        <div className="w-100 p-2">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{test.name}</h5>
                            <button type="button" className="btn btn-primary btn-sm">{test.type}</button>
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
              {/* <div className="mt-3">
                <div className="card-body">
                  <input type="submit" value="Submit" className="btn btn-primary w-100"  style={{boxShadow: "0 0 2px"}} />
                </div>
              </div> */}
            </form>
            
            
            <div id="scrollTrack" ref={observe}>
              {userData.tests.length> 0 ? <ReviewTest allTest={allTest} userData={userData} />:"" }
            </div>
            <button className="btn btn-primary w-100 mt-3">Submit</button>
        </div>
    )
}
export default TestForm