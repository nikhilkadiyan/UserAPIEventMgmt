import React, { useState } from 'react';
const getUsers = require('../apicalls/getUsers');

function GetUsers(props) {
    const [user, setUser] = useState({ email: '', name: '', mobile: '' });

    const handleGetClick = async (e) => {
        e.preventDefault();
        let res = await getUsers(user.name, user.email, user.mobile);
        props.updateResOutput(res);
        props.setGetUserVisibility(false);
    }
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobile" name='mobile' onChange={onChange} />
                </div>
                <div className='my-3'>
                    <button onClick={()=>{props.setGetUserVisibility(false)}} type="button" class="btn btn-secondary me-3">Close</button>
                    <button onClick={handleGetClick} type="button" className="btn btn-success">Get Users</button>
                </div>
            </form>
        </div>
    )
}

export default GetUsers
