import React from 'react'

const UpdateUser = () => {
  return (
    <div className="d-flex vh-100 bg-primary align-items-center justify-content-center">
    <div className="bg-white rounded flex align-items p-3">
      <h2>Users</h2>
      <form>
        <div className="mb-3">
            <label htmlFor="">Full Name</label>
            <input type="text" className="form-control" placeholder='Enter Full Name'/>
        </div>

        <div className="mb-3">
            <label htmlFor="">Phone Number</label>
            <input type="text" className="form-control" placeholder='Enter Phone Number'/>
        </div>


        <div className="mb-3">
            <label htmlFor="">Email</label>
            <input type="email" className="form-control" placeholder='Enter Email Address'/>
        </div>


        <div className="d-flex vh-100 bg-primary align-items-center justify-content-center">
    <div className="bg-white rounded flex align-items p-3">
      <h2>Users</h2>
      <form>
        <div className="mb-3">
            <label htmlFor="">Full Name</label>
            <input type="text" className="form-control" placeholder='Enter Full Name'/>
        </div>

        <div className="mb-3">
            <label htmlFor="">Phone Number</label>
            <input type="text" className="form-control" placeholder='Enter Phone Number'/>
        </div>


        <div className="mb-3">
            <label htmlFor="">Wallet</label>
            <input type="text" className="form-control" placeholder='Enter Amount'/>
        </div>

        <button className="btn btn-success">Update</button>

        
      </form>
    </div>
  </div>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser