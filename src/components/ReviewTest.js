import React from 'react';

const ReviewTest = ({allTest, userData, passIsReview}) => {
    const  onCheckboxChange= () => {
      console.log("onCheckboxChange")
    }
    return (
        <div className="card card-body blockCom mt-5" id="reviewSection">
            <h3>REVIEW Section</h3>
              {/* <div className="card mt-3" style={{boxShadow: "0 0 2px"}}>
                <div className="card-body">
                  <h4><strong>Name: </strong><span className="text-primary">{userData.name}</span></h4>
                  <h4><strong>Contact: </strong><span className="text-primary">{userData.contact}</span></h4>
                  <h4><strong>Address: </strong><span className="text-primary">{userData.address}</span></h4>
                </div>
              </div> */}
              <div className="mt-3">
                <div>
                  <div className="list-group">
                    {userData.tests.length > 0 && userData.tests.map((test, i) => (
                      <span className="list-group-item" key={i} aria-current="true" style={{cursor:"pointer"}}>
                      <div className="d-flex w-100 justify-content-start">
                        <input 
                            className="form-check-input me-1 align-self-center" 
                            type="checkbox"
                            onChange={e=>onCheckboxChange()}
                            checked
                        />
                        <div className="w-100 p-2">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{JSON.parse(test).name}</h5>
                            <button className="btn btn-primary btn-sm">{JSON.parse(test).type}</button>
                          </div>
                          <h6 className="text-warning">Price: <strong>{JSON.parse(test).price}</strong></h6>
                          <p className="mb-1">{JSON.parse(test).des}</p>
                        </div>
                      </div>
                    </span>
                    ))}
                  </div>
                  <p className="mt-3">You have selected a total of {userData.tests.length} tests</p>
                  <p>This are:</p>
                  {userData.tests.length > 0 && userData.tests.map((test, i) => (
                      <span className="p-1 m-1 text-primary" key={i}>{JSON.parse(test).name} (Rs {JSON.parse(test).price})</span>
                  ))}
                  <h2 className="mt-3 text-warning">The total cost is: {userData.total}</h2>
                  <p className="mt-2">Click Submit to schedule an appointment. Our collection
                    technician will reach out to you </p>
                </div>
              </div>
              {/* <div className="mt-3">
                <div className="card-body">
                    <button className="btn btn-info m-2" onClick={e => passIsReview(false)} style={{boxShadow: "0 0 2px"}}>Back/Edit</button>
                    <button className="btn btn-info m-2" style={{boxShadow: "0 0 2px"}}>Book Now</button>
                </div>
              </div> */}
        </div>
    )
}
export default ReviewTest