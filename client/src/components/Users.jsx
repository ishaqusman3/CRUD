import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([
      {Name: 'Ïshaq', Phone: '09130056086', Email: 'ishaq@gmail.com', Wallet: 0} , 
      {Name: 'Musa', Phone: '09130866086', Email: 'musa@gmail.com', Wallet: 0} , 

    ])
  return (
    <div className="d-flex vh-100 bg-primary align-items-center justify-content-center">
    <div className="bg-white rounded flex align-items p-3 w-75">
      <h2 className='text-center text-primary'>Users</h2>
      <br />
      <Link to='/create' className="btn btn-success">Add User +</Link>
      <table className='table'>

            <tr>
                <th>Customer Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Wallet</th>
                <th>Action</th>
            </tr>

            {
                users.map((user)=>{
                    return <tr>
                            <td>{user.Name}</td>
                            <td>{user.Phone}</td>
                            <td>{user.Email}</td>
                            <td>{user.Wallet}</td>
                            <td>
                                <Link to='/update' className="btn btn-primary bg-primary text-white" >Edit</Link>
                                <button className='btn btn-danger bg-danger text-white  '>Delete</button>
                            </td>
                    </tr>
                })
            }

       
      </table>
    </div>
  </div>
  )
}

export default Users