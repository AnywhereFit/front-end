import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'reactstrap';
import axiosWithAuth from './utils/axiosWithAuth';

const Client = () => {

  const [classes, setClasses] = useState([]);
  
  useEffect(() => {
    axiosWithAuth().get('/classes')
      .then(resp => {
        setClasses(resp.data);
        console.log(resp.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);
    
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Client Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search For A Class Here</button>
      </form>
    </div>
  </div>
</nav>

<div>
<img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" class="img-fluid" alt="battlerope"/>
</div>


      <ul className="list-group">
        {
          classes.map(item => {
            return <div>
              <h3 className="list-group-item">{item.class_name}</h3>
              <h5>Class Type: {item.class_type}</h5>
              <li>Date: {item.class_date} | Start: {item.start_time} | Duration: {item.class_duration} | Location: {item.class_location} | Max Attendees: {item.max_attendees}</li>

              </div>
          })
        }
      </ul>



<div className='bg-image' style={{ maxWidth: '100rem'}}>
      <img src='https://images.unsplash.com/photo-1603233720024-4ee0592a58f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8' className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>Join us today!</p>
        </div>
      </div>
    </div>
</>

      )
};

export default Client;



